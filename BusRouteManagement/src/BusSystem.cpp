#include "BusSystem.h"
#include "FileManager.h"
#include "Utils.h"
#include <iostream>
#include <algorithm>

BusSystem::BusSystem(const std::string& path) : basePath(path) {
    loadData();
}

BusSystem::~BusSystem() {
    saveData();
}

void BusSystem::loadData() {
    auto busLines = FileManager::readLines(basePath + "/buses.txt");
    for (const auto& line : busLines) { auto b = Bus::fromString(line); buses[b.busNumber] = b; }

    auto stopLines = FileManager::readLines(basePath + "/stops.txt");
    for (const auto& line : stopLines) { auto s = BusStop::fromString(line); stops[s.stopId] = s; }

    auto routeLines = FileManager::readLines(basePath + "/routes.txt");
    for (const auto& line : routeLines) {
        if (line.rfind("ROUTE|", 0) == 0) {
            auto r = Route::fromString(line.substr(6)); routes[r.routeId] = r;
        } else if (line.rfind("EDGE|", 0) == 0) {
            auto parts = Utils::split(line.substr(5), '|');
            if (parts.size() >= 3) {
                graph.addEdge(parts[0], parts[1], std::stoi(parts[2]));
            }
        } else if (!line.empty()) {
            auto r = Route::fromString(line); routes[r.routeId] = r;
        }
    }

    auto passengerLines = FileManager::readLines(basePath + "/passengers.txt");
    for (const auto& line : passengerLines) { auto p = Passenger::fromString(line); passengers[p.getUserId()] = p; }

    auto bookingLines = FileManager::readLines(basePath + "/bookings.txt");
    for (const auto& line : bookingLines) {
        if (!line.empty()) { auto bk = Booking::fromString(line); bookings[bk.bookingId] = bk; }
    }

    // Initialize sample data if no data files exist (empty dataset)
    if (buses.empty() && stops.empty() && routes.empty()) {
        addStop(BusStop("1", "ISBT Dehradun", "South"));
        addStop(BusStop("2", "Clement Town", "South"));
        addStop(BusStop("3", "Clock Tower", "Center"));
        addStop(BusStop("4", "Rajpur Road", "North"));
        addStop(BusStop("5", "Sahastradhara", "North-East"));
        addStop(BusStop("6", "FRI", "West"));
        addStop(BusStop("7", "Prem Nagar", "West"));
        addStop(BusStop("8", "Robber's Cave", "North"));

        graph.addEdge("1", "2", 5);
        graph.addEdge("1", "3", 7);
        graph.addEdge("2", "3", 9);
        graph.addEdge("3", "4", 4);
        graph.addEdge("4", "5", 12);
        graph.addEdge("4", "8", 6);
        graph.addEdge("3", "6", 6);
        graph.addEdge("6", "7", 5);

        addBus(Bus("201", "Doon Express", 40, 40, "1", 4.0));
        addBus(Bus("202", "Valley Tour", 30, 30, "2", 5.5));
        addBus(Bus("203", "City Link", 50, 50, "3", 3.0));
        addBus(Bus("204", "Hill View", 35, 35, "4", 6.0));
        
        addRoute(Route("1", "Dehradun Central", {"1", "3", "4", "8"}));
        addRoute(Route("2", "Tourist Special", {"3", "6", "7"}));
        addRoute(Route("3", "East-West Connect", {"2", "1", "3", "6", "7"}));
        addRoute(Route("4", "Sahastradhara Express", {"1", "3", "4", "5"}));
        
        saveData();
    }
}

void BusSystem::saveData() {
    std::vector<std::string> busLines;
    for (const auto& kv : buses) busLines.push_back(kv.second.toString());
    FileManager::writeLines(basePath + "/buses.txt", busLines);

    std::vector<std::string> stopLines;
    for (const auto& kv : stops) stopLines.push_back(kv.second.toString());
    FileManager::writeLines(basePath + "/stops.txt", stopLines);

    std::vector<std::string> routeLines;
    for (const auto& kv : routes) routeLines.push_back("ROUTE|" + kv.second.toString());
    auto edges = graph.exportEdges();
    routeLines.insert(routeLines.end(), edges.begin(), edges.end());
    FileManager::writeLines(basePath + "/routes.txt", routeLines);

    std::vector<std::string> passengerLines;
    for (const auto& kv : passengers) passengerLines.push_back(kv.second.toString());
    FileManager::writeLines(basePath + "/passengers.txt", passengerLines);

    std::vector<std::string> bookingLines;
    for (const auto& kv : bookings) bookingLines.push_back(kv.second.toString());
    FileManager::writeLines(basePath + "/bookings.txt", bookingLines);
}

void BusSystem::addBus(const Bus& bus) {
    buses[bus.busNumber] = bus;
}

void BusSystem::removeBus(const std::string& busNumber) {
    buses.erase(busNumber);
}

void BusSystem::addStop(const BusStop& stop) {
    stops[stop.stopId] = stop;
}

void BusSystem::removeStop(const std::string& stopId) {
    stops.erase(stopId);
}

void BusSystem::addRoute(const Route& route) {
    routes[route.routeId] = route;
}

void BusSystem::removeRoute(const std::string& routeId) {
    routes.erase(routeId);
}

void BusSystem::addDistance(const std::string& src, const std::string& dest, int km) {
    graph.addEdge(src, dest, km);
}

Bus* BusSystem::searchBus(const std::string& busNumber) {
    auto it = buses.find(busNumber);
    if (it != buses.end()) return &(it->second);
    return nullptr;
}

std::pair<std::vector<std::string>, int> BusSystem::findShortestRoute(const std::string& srcStopId, const std::string& destStopId) {
    return graph.findShortestPath(srcStopId, destStopId);
}

std::vector<std::string> BusSystem::findRouteBFS(const std::string& srcStopId, const std::string& destStopId) {
    return graph.findMinStopsPath(srcStopId, destStopId);
}

bool BusSystem::bookTicket(const std::string& pId, const std::string& pName, const std::string& pPass, int pAge, const std::string& pGender, const std::string& busNumber, const std::string& src, const std::string& dest) {
    std::string targetBus = busNumber;
    
    if (targetBus.empty()) {
        for (const auto& kv : buses) {
            const auto& b = kv.second;
            std::string rId = b.routeId;
            auto rIt = routes.find(rId);
            if (rIt != routes.end()) {
                const auto& r = rIt->second;
                auto stops = r.stopIds;
                auto srcIt = std::find(stops.begin(), stops.end(), src);
                if (srcIt != stops.end()) {
                    auto destIt = std::find(srcIt + 1, stops.end(), dest);
                    if (destIt != stops.end()) {
                        targetBus = b.busNumber;
                        break;
                    }
                }
            }
        }
    }
    
    if (targetBus.empty()) {
        std::cout << "No direct bus available between these stops.\n";
        return false;
    }

    std::cout << "Selecting bus " << targetBus << "...\n";
    auto it = buses.find(targetBus);
    if (it != buses.end()) {
        auto& b = it->second;
        Passenger p(pId, pName, pPass, pAge, pGender);
        
        std::cout << "Checking available seats...\n";
        if (b.seats > 0) {
            std::cout << "Seat available. Booking seat...\n";
            b.seats -= 1;
            
            std::cout << "Calculating fare based on shortest path distance...\n";
            auto routeResult = findShortestRoute(src, dest);
            int distance = routeResult.second;
            if (distance == 0 && src != dest) {
                std::cout << "Warning: No route found. Using default distance (10 km).\n";
                distance = 10;
            }
            double fare = b.farePerKm * distance;
            
            std::cout << "Generating booking...\n";
            std::string bookingId = "BKG" + std::to_string(bookings.size() + 1);
            
            std::cout << "Saving booking...\n";
            passengers[p.getUserId()] = p;
            Booking bk(bookingId, pId, targetBus, src, dest, fare);
            bookings[bookingId] = bk;
            
            std::cout << "Booking successful! Booking ID: " << bookingId << " Fare: ₹" << fare << " (" << distance << " km)\n";
            return true;
        } else {
            std::cout << "Bus is full. Passenger added to the waiting queue.\n";
            waitingQueue[targetBus].push(p);
            return false;
        }
    }
    std::cout << "Bus not found." << std::endl;
    return false;
}

bool BusSystem::cancelTicket(const std::string& bookingId) {
    std::cout << "Canceling ticket " << bookingId << "...\n";
    auto it = bookings.find(bookingId);
    if (it != bookings.end()) {
        std::string bNum = it->second.busNumber;
        bookings.erase(it);
        
        std::cout << "Releasing seat on bus " << bNum << "...\n";
        auto busIt = buses.find(bNum);
        if (busIt != buses.end()) {
            auto& b = busIt->second;
            b.seats += 1;
            
            std::cout << "Checking if waiting queue is empty...\n";
            if (waitingQueue.find(bNum) != waitingQueue.end() && !waitingQueue[bNum].empty()) {
                std::cout << "Queue is NOT empty. Giving seat to first passenger...\n";
                processWaitlist(bNum);
            } else {
                std::cout << "Queue is empty. End of cancellation process.\n";
            }
            return true;
        }
        return true;
    }
    std::cout << "Booking ID not found.\n";
    return false;
}

void BusSystem::processWaitlist(const std::string& busNumber) {
    if (waitingQueue.find(busNumber) != waitingQueue.end() && !waitingQueue[busNumber].empty()) {
        auto it = buses.find(busNumber);
        if (it != buses.end() && it->second.seats > 0) {
            Passenger p = waitingQueue[busNumber].front();
            waitingQueue[busNumber].pop();
            
            // Automatically assign seat
            bookTicket(p.getUserId(), p.getUsername(), "pass", p.getAge(), p.getGender(), busNumber, "Unknown", "Unknown");
            std::cout << "Waitlisted passenger " << p.getUsername() << " has been booked.\n";
            return;
        }
        std::cout << "Waitlist exists but no seats are available on " << busNumber << ".\n";
    } else {
        std::cout << "No passengers on waitlist for " << busNumber << ".\n";
    }
}

void BusSystem::displayBuses() const {
    std::cout << "\n================ ALL BUSES ================\n";
    if (buses.empty()) {
        std::cout << "No buses available.\n";
        return;
    }
    for (const auto& kv : buses) {
        displayBusDetails(kv.second.busNumber);
    }
}

void BusSystem::displayStops() const {
    std::cout << "\n================ ALL BUS STOPS ================\n";
    if (stops.empty()) {
        std::cout << "No stops available.\n";
        return;
    }
    for (const auto& kv : stops) {
        const auto& s = kv.second;
        std::cout << "ID: " << s.stopId 
                  << " | Name: " << s.stopName 
                  << " | Location: " << s.location << "\n";
    }
    std::cout << "===============================================\n";
}

void BusSystem::displayRoutes() const {
    std::cout << "\n================ ALL ROUTES ================\n";
    if (routes.empty()) {
        std::cout << "No routes available.\n";
        return;
    }
    for (const auto& kv : routes) {
        const auto& r = kv.second;
        std::cout << "Route ID   : " << r.routeId << "\n";
        std::cout << "Route Name : " << r.routeName << "\n";
        std::cout << "Stops      : ";
        auto sIds = r.stopIds;
        if (sIds.empty()) std::cout << "None";
        for (size_t i = 0; i < sIds.size(); ++i) {
            std::cout << getStopName(sIds[i]);
            if (i != sIds.size() - 1) std::cout << " -> ";
        }
        std::cout << "\n--------------------------------------------\n";
    }
}

void BusSystem::displayBookings() const {
    std::cout << "\n================ ALL BOOKINGS ================\n";
    if (bookings.empty()) {
        std::cout << "No bookings in the system.\n";
        return;
    }
    for (const auto& kv : bookings) {
        const auto& bk = kv.second;
        std::cout << "Booking ID  : " << bk.bookingId << "\n";
        std::cout << "Passenger ID: " << bk.passengerId << "\n";
        std::cout << "Bus Number  : " << bk.busNumber << "\n";
        std::cout << "Journey     : " << getStopName(bk.source) << " to " << getStopName(bk.destination) << "\n";
        std::cout << "Fare Paid   : ₹" << bk.fare << "\n";
        std::cout << "----------------------------------------------\n";
    }
}

void BusSystem::displayBookingsForUser(const std::string& userId) const {
    std::cout << "\n================ MY BOOKINGS ================\n";
    bool found = false;
    for (const auto& kv : bookings) {
        const auto& bk = kv.second;
        if (bk.passengerId == userId) {
            std::cout << "Booking ID  : " << bk.bookingId << "\n";
            std::cout << "Bus Number  : " << bk.busNumber << "\n";
            std::cout << "Journey     : " << getStopName(bk.source) << " to " << getStopName(bk.destination) << "\n";
            std::cout << "Fare Paid   : ₹" << bk.fare << "\n";
            std::cout << "---------------------------------------------\n";
            found = true;
        }
    }
    if (!found) std::cout << "No bookings found for your account.\n";
    std::cout << "=============================================\n";
}

std::string BusSystem::getStopName(const std::string& stopId) const {
    auto it = stops.find(stopId);
    if (it != stops.end()) return it->second.stopName;
    return "Unknown Stop";
}

std::string BusSystem::getStopIdByName(const std::string& stopName) const {
    for (const auto& kv : stops) {
        if (kv.second.stopName == stopName) return kv.second.stopId;
    }
    return "";
}

void BusSystem::displayBusDetails(const std::string& busNumber) const {
    auto it = buses.find(busNumber);
    if (it == buses.end()) {
        std::cout << "Bus not found.\n";
        return;
    }
    const Bus& foundBus = it->second;

    std::cout << "\n================ BUS DETAILS ================\n";
    std::cout << "Bus Number  : " << foundBus.busNumber << "\n";
    std::cout << "Bus Name    : " << foundBus.busName << "\n";
    std::cout << "Capacity    : " << foundBus.capacity << " (Available: " << foundBus.seats << ")\n";
    std::cout << "Fare Per Km : ₹" << foundBus.farePerKm << "\n";
    
    auto rIt = routes.find(foundBus.routeId);
    if (rIt != routes.end()) {
        const Route& foundRoute = rIt->second;
        std::cout << "Route Name  : " << foundRoute.routeName << "\n\n";
        std::cout << "Possible Stops / Trajectory:\n";
        auto stopIds = foundRoute.stopIds;
        for (size_t i = 0; i < stopIds.size(); ++i) {
            std::cout << getStopName(stopIds[i]) << "\n";
            if (i != stopIds.size() - 1) std::cout << "    ↓\n";
        }
    } else {
        std::cout << "Route ID " << foundBus.routeId << " not found in system.\n";
    }
    std::cout << "=============================================\n";
}

void BusSystem::displayNetwork() const {
    std::cout << "\n================ ROUTE NETWORK ================\n";
    graph.displayNetwork();
    std::cout << "===============================================\n";
}
