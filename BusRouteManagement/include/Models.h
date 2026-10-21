#ifndef MODELS_H
#define MODELS_H

#include <string>
#include <vector>
#include <sstream>
#include "Utils.h"

struct BusStop {
    std::string stopId;
    std::string stopName;
    std::string location;

    BusStop() = default;
    BusStop(const std::string& id, const std::string& name, const std::string& loc)
        : stopId(id), stopName(name), location(loc) {}

    std::string toString() const {
        return stopId + "|" + stopName + "|" + location;
    }

    static BusStop fromString(const std::string& data) {
        auto tokens = Utils::split(data, '|');
        return {tokens[0], tokens[1], tokens[2]};
    }
};

struct Route {
    std::string routeId;
    std::string routeName;
    std::vector<std::string> stopIds;

    Route() = default;
    Route(const std::string& id, const std::string& name, const std::vector<std::string>& stops)
        : routeId(id), routeName(name), stopIds(stops) {}

    std::string toString() const {
        std::string res = routeId + "|" + routeName + "|";
        for (size_t i = 0; i < stopIds.size(); ++i) {
            res += stopIds[i];
            if (i < stopIds.size() - 1) res += ",";
        }
        return res;
    }

    static Route fromString(const std::string& data) {
        auto tokens = Utils::split(data, '|');
        std::vector<std::string> stops;
        if (tokens.size() > 2) {
            stops = Utils::split(tokens[2], ',');
        }
        return {tokens[0], tokens[1], stops};
    }
};

struct Bus {
    std::string busNumber;
    std::string busName;
    int capacity;
    int seats; // available seats
    std::string routeId;
    double farePerKm;

    Bus() = default;
    Bus(const std::string& bNum, const std::string& bName, int cap, int s, const std::string& rId, double fare)
        : busNumber(bNum), busName(bName), capacity(cap), seats(s), routeId(rId), farePerKm(fare) {}

    std::string toString() const {
        return busNumber + "|" + busName + "|" + std::to_string(capacity) + "|" +
               std::to_string(seats) + "|" + routeId + "|" + std::to_string(farePerKm);
    }

    static Bus fromString(const std::string& data) {
        auto tokens = Utils::split(data, '|');
        return {tokens[0], tokens[1], std::stoi(tokens[2]), std::stoi(tokens[3]), tokens[4], std::stod(tokens[5])};
    }
};

struct Booking {
    std::string bookingId;
    std::string passengerId;
    std::string busNumber;
    std::string source;
    std::string destination;
    double fare;

    Booking() = default;
    Booking(const std::string& bId, const std::string& pId, const std::string& bNum, const std::string& src, const std::string& dest, double f)
        : bookingId(bId), passengerId(pId), busNumber(bNum), source(src), destination(dest), fare(f) {}

    std::string toString() const {
        return bookingId + "|" + passengerId + "|" + busNumber + "|" +
               source + "|" + destination + "|" + std::to_string(fare);
    }

    static Booking fromString(const std::string& data) {
        auto tokens = Utils::split(data, '|');
        return {tokens[0], tokens[1], tokens[2], tokens[3], tokens[4], std::stod(tokens[5])};
    }
};

#endif // MODELS_H
