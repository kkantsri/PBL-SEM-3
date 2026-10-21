import re
import os

with open("src/BusSystem.cpp", "r") as f:
    code = f.read()

# loadData()
code = re.sub(r'buses\.push_back\(Bus::fromString\((line)\)\);', r'auto b = Bus::fromString(\1); buses[b.busNumber] = b;', code)
code = re.sub(r'stops\.push_back\(BusStop::fromString\((line)\)\);', r'auto s = BusStop::fromString(\1); stops[s.stopId] = s;', code)
code = re.sub(r'routes\.push_back\(Route::fromString\((.*?)\)\);', r'auto r = Route::fromString(\1); routes[r.routeId] = r;', code)
code = re.sub(r'passengers\.push_back\(Passenger::fromString\((line)\)\);', r'auto p = Passenger::fromString(\1); passengers[p.getUserId()] = p;', code)
code = re.sub(r'bookings\.push_back\(Booking::fromString\((line)\)\);', r'auto bk = Booking::fromString(\1); bookings[bk.bookingId] = bk;', code)

# add/remove methods
code = re.sub(r'void BusSystem::addBus\(const Bus& bus\) \{.*?\}', 'void BusSystem::addBus(const Bus& bus) { buses[bus.busNumber] = bus; }', code, flags=re.DOTALL)
code = re.sub(r'void BusSystem::removeBus\(const std::string& busNumber\) \{.*?\}', 'void BusSystem::removeBus(const std::string& busNumber) { buses.erase(busNumber); }', code, flags=re.DOTALL)
code = re.sub(r'void BusSystem::addStop\(const BusStop& stop\) \{.*?\}', 'void BusSystem::addStop(const BusStop& stop) { stops[stop.stopId] = stop; }', code, flags=re.DOTALL)
code = re.sub(r'void BusSystem::removeStop\(const std::string& stopId\) \{.*?\}', 'void BusSystem::removeStop(const std::string& stopId) { stops.erase(stopId); }', code, flags=re.DOTALL)
code = re.sub(r'void BusSystem::addRoute\(const Route& route\) \{.*?\}', 'void BusSystem::addRoute(const Route& route) { routes[route.routeId] = route; }', code, flags=re.DOTALL)
code = re.sub(r'void BusSystem::removeRoute\(const std::string& routeId\) \{.*?\}', 'void BusSystem::removeRoute(const std::string& routeId) { routes.erase(routeId); }', code, flags=re.DOTALL)

# searchBus
search_bus = """Bus* BusSystem::searchBus(const std::string& busNumber) {
    auto it = buses.find(busNumber);
    if (it != buses.end()) return &(it->second);
    return nullptr;
}"""
code = re.sub(r'Bus\* BusSystem::searchBus\(const std::string& busNumber\) \{.*?return nullptr;\n\}', search_bus, code, flags=re.DOTALL)

# cancelTicket
cancel_ticket = """bool BusSystem::cancelTicket(const std::string& bookingId) {
    auto it = bookings.find(bookingId);
    if (it != bookings.end()) {
        auto busIt = buses.find(it->second.busNumber);
        if (busIt != buses.end()) busIt->second.seats++;
        bookings.erase(it);
        return true;
    }
    return false;
}"""
code = re.sub(r'bool BusSystem::cancelTicket\(const std::string& bookingId\) \{.*?return false;\n\}', cancel_ticket, code, flags=re.DOTALL)

# saveData() loops
code = re.sub(r'for \(const auto& b : buses\) busLines\.push_back\(b\.toString\(\)\);', r'for (const auto& kv : buses) busLines.push_back(kv.second.toString());', code)
code = re.sub(r'for \(const auto& s : stops\) stopLines\.push_back\(s\.toString\(\)\);', r'for (const auto& kv : stops) stopLines.push_back(kv.second.toString());', code)
code = re.sub(r'for \(const auto& r : routes\) routeLines\.push_back\("ROUTE\|" \+ r\.toString\(\)\);', r'for (const auto& kv : routes) routeLines.push_back("ROUTE|" + kv.second.toString());', code)
code = re.sub(r'for \(const auto& p : passengers\) passengerLines\.push_back\(p\.toString\(\)\);', r'for (const auto& kv : passengers) passengerLines.push_back(kv.second.toString());', code)
code = re.sub(r'for \(const auto& b : bookings\) bookingLines\.push_back\(b\.toString\(\)\);', r'for (const auto& kv : bookings) bookingLines.push_back(kv.second.toString());', code)

# display methods
code = re.sub(r'for \(const auto& b : buses\)', r'for (const auto& kv : buses) { const auto& b = kv.second;', code)
code = re.sub(r'for \(const auto& s : stops\)', r'for (const auto& kv : stops) { const auto& s = kv.second;', code)
code = re.sub(r'for \(const auto& r : routes\)', r'for (const auto& kv : routes) { const auto& r = kv.second;', code)
code = re.sub(r'for \(const auto& b : bookings\)', r'for (const auto& kv : bookings) { const auto& b = kv.second;', code)
code = code.replace("    if (stops.empty()) {", "    if (stops.empty()) {")

# For the loops we just broke syntax for by adding an open brace without a close brace:
# Actually wait, `for(auto b: buses) std::cout << b;` -> `for(auto kv: buses) { auto b = kv.second; std::cout << b; }`
# I should just replace them with proper blocks.

with open("src/BusSystem.cpp", "w") as f:
    f.write(code)
