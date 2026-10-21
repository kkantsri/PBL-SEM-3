#include <iostream>
#include <string>
#include <vector>
#include "BusSystem.h"

int main(int argc, char* argv[]) {
    if (argc < 2) {
        std::cout << "{\"error\":\"Missing command argument\"}" << std::endl;
        return 1;
    }

    std::string cmd = argv[1];
    // Find data path: relative to executable or current working directory
    std::string dataPath = "data";
    for (int i = 1; i < argc; ++i) {
        if (std::string(argv[i]) == "--data-path" && i + 1 < argc) {
            dataPath = argv[i + 1];
        }
    }

    BusSystem system(dataPath);

    if (cmd == "--get-stops") {
        const auto& stops = system.getStops();
        std::cout << "[";
        bool first = true;
        for (const auto& kv : stops) {
            const auto& s = kv.second;
            if (!first) std::cout << ",";
            first = false;
            std::cout << "{\"stopId\":\"" << s.stopId << "\",\"stopName\":\"" << s.stopName
                      << "\",\"location\":\"" << s.location << "\"}";
        }
        std::cout << "]" << std::endl;
        return 0;
    }

    if (cmd == "--get-buses") {
        const auto& buses = system.getBuses();
        std::cout << "[";
        bool first = true;
        for (const auto& kv : buses) {
            const auto& b = kv.second;
            if (!first) std::cout << ",";
            first = false;
            std::cout << "{\"busNumber\":\"" << b.busNumber << "\",\"busName\":\"" << b.busName
                      << "\",\"capacity\":" << b.capacity << ",\"seats\":" << b.seats
                      << ",\"routeId\":\"" << b.routeId << "\",\"farePerKm\":" << b.farePerKm << "}";
        }
        std::cout << "]" << std::endl;
        return 0;
    }

    if (cmd == "--get-routes") {
        const auto& routes = system.getRoutes();
        std::cout << "[";
        bool first = true;
        for (const auto& kv : routes) {
            const auto& r = kv.second;
            if (!first) std::cout << ",";
            first = false;
            std::cout << "{\"routeId\":\"" << r.routeId << "\",\"routeName\":\"" << r.routeName << "\",\"stops\":[";
            for (size_t i = 0; i < r.stopIds.size(); ++i) {
                if (i > 0) std::cout << ",";
                std::cout << "\"" << r.stopIds[i] << "\"";
            }
            std::cout << "]}";
        }
        std::cout << "]" << std::endl;
        return 0;
    }

    if (cmd == "--get-bookings") {
        const auto& bookings = system.getBookings();
        std::cout << "[";
        bool first = true;
        for (const auto& kv : bookings) {
            const auto& b = kv.second;
            if (!first) std::cout << ",";
            first = false;
            std::cout << "{\"bookingId\":\"" << b.bookingId << "\",\"passengerId\":\"" << b.passengerId
                      << "\",\"busNumber\":\"" << b.busNumber << "\",\"source\":\"" << b.source
                      << "\",\"sourceName\":\"" << system.getStopName(b.source)
                      << "\",\"destination\":\"" << b.destination
                      << "\",\"destinationName\":\"" << system.getStopName(b.destination)
                      << "\",\"fare\":" << b.fare << "}";
        }
        std::cout << "]" << std::endl;
        return 0;
    }

    if (cmd == "--shortest-path") {
        if (argc < 4) {
            std::cout << "{\"error\":\"Usage: --shortest-path <srcStopId> <destStopId>\"}" << std::endl;
            return 1;
        }
        std::string src = argv[2];
        std::string dest = argv[3];
        auto res = system.findShortestRoute(src, dest);
        std::cout << "{\"src\":\"" << src << "\",\"srcName\":\"" << system.getStopName(src)
                  << "\",\"dest\":\"" << dest << "\",\"destName\":\"" << system.getStopName(dest)
                  << "\",\"distance\":" << res.second << ",\"path\":[";
        for (size_t i = 0; i < res.first.size(); ++i) {
            if (i > 0) std::cout << ",";
            std::cout << "{\"stopId\":\"" << res.first[i] << "\",\"stopName\":\""
                      << system.getStopName(res.first[i]) << "\"}";
        }
        std::cout << "]}" << std::endl;
        return 0;
    }

    if (cmd == "--book") {
        // Usage: --book <pId> <pName> <pAge> <pGender> <busNumber> <srcStopId> <destStopId>
        if (argc < 9) {
            std::cout << "{\"success\":false,\"message\":\"Usage: --book <pId> <pName> <pAge> <gender> <busNo> <srcId> <destId>\"}" << std::endl;
            return 1;
        }
        std::string pId = argv[2];
        std::string pName = argv[3];
        int age = std::stoi(argv[4]);
        std::string gender = argv[5];
        std::string busNo = argv[6];
        std::string src = argv[7];
        std::string dest = argv[8];

        bool success = system.bookTicket(pId, pName, "pass123", age, gender, busNo, src, dest);
        if (success) {
            std::cout << "{\"success\":true,\"message\":\"Ticket booked successfully\"}" << std::endl;
        } else {
            std::cout << "{\"success\":false,\"message\":\"Could not book ticket. Bus may be full or route invalid.\"}" << std::endl;
        }
        return 0;
    }

    if (cmd == "--cancel") {
        // Usage: --cancel <bookingId>
        if (argc < 3) {
            std::cout << "{\"success\":false,\"message\":\"Usage: --cancel <bookingId>\"}" << std::endl;
            return 1;
        }
        std::string bId = argv[2];
        bool success = system.cancelTicket(bId);
        if (success) {
            std::cout << "{\"success\":true,\"message\":\"Ticket cancelled successfully\"}" << std::endl;
        } else {
            std::cout << "{\"success\":false,\"message\":\"Booking ID not found\"}" << std::endl;
        }
        return 0;
    }

    std::cout << "{\"error\":\"Unknown command\"}" << std::endl;
    return 1;
}
