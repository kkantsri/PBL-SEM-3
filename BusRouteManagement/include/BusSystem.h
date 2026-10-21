#ifndef BUSSYSTEM_H
#define BUSSYSTEM_H

#include <vector>
#include <string>
#include <unordered_map>
#include <queue>
#include "Models.h"
#include "Users.h"
#include "Graph.h"

class BusSystem {
private:
    std::unordered_map<std::string, Bus> buses;
    std::unordered_map<std::string, BusStop> stops;
    std::unordered_map<std::string, Route> routes;
    std::unordered_map<std::string, Passenger> passengers;
    std::unordered_map<std::string, Booking> bookings;
    
    // Feature: Queue for Waitlisting
    std::unordered_map<std::string, std::queue<Passenger>> waitingQueue;
    
    // Feature: Weighted Graph (Distances)
    Graph graph;
    
    std::string basePath;

    void loadData();
    void saveData();

public:
    BusSystem(const std::string& path);
    ~BusSystem();

    // Core Management
    void addBus(const Bus& bus);
    void removeBus(const std::string& busNumber);
    
    void addStop(const BusStop& stop);
    void removeStop(const std::string& stopId);
    
    void addRoute(const Route& route);
    void removeRoute(const std::string& routeId);
    
    void addDistance(const std::string& src, const std::string& dest, int km);
    
    Bus* searchBus(const std::string& busNumber);
    
    // Graph Routing Algorithms
    std::pair<std::vector<std::string>, int> findShortestRoute(const std::string& srcStopId, const std::string& destStopId);
    std::vector<std::string> findRouteBFS(const std::string& srcStopId, const std::string& destStopId);
    
    // Bookings
    bool bookTicket(const std::string& passengerId, const std::string& passName, const std::string& passPass, int passAge, const std::string& passGender, const std::string& busNumber, const std::string& src, const std::string& dest);
    bool cancelTicket(const std::string& bookingId);
    void processWaitlist(const std::string& busNumber);

    // Displays
    void displayBuses() const;
    void displayStops() const;
    void displayRoutes() const;
    void displayBookings() const;
    void displayBookingsForUser(const std::string& userId) const;
    void displayNetwork() const;
    void displayBusDetails(const std::string& busNumber) const;

    std::string getStopName(const std::string& stopId) const;
    std::string getStopIdByName(const std::string& stopName) const;

    const std::unordered_map<std::string, Bus>& getBuses() const { return buses; }
    const std::unordered_map<std::string, BusStop>& getStops() const { return stops; }
    const std::unordered_map<std::string, Route>& getRoutes() const { return routes; }
    const std::unordered_map<std::string, Booking>& getBookings() const { return bookings; }
};

#endif // BUSSYSTEM_H
