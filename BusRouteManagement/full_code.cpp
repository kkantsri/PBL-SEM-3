#include <algorithm>
#include <fstream>
#include <iostream>
#include <limits>
#include <queue>
#include <sstream>
#include <string>
#include <unordered_map>
#include <utility>
#include <vector>


// --- include/Utils.h ---
#ifndef UTILS_H
#define UTILS_H


namespace Utils {
    std::vector<std::string> split(const std::string& str, char delimiter);
}

#endif // UTILS_H


// --- include/FileManager.h ---
#ifndef FILEMANAGER_H
#define FILEMANAGER_H


class FileManager {
public:
    static std::vector<std::string> readLines(const std::string& filepath);
    static void writeLines(const std::string& filepath, const std::vector<std::string>& lines);
    static void appendLine(const std::string& filepath, const std::string& line);
};

#endif // FILEMANAGER_H


// --- include/Models.h ---
#ifndef MODELS_H
#define MODELS_H


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


// --- include/Graph.h ---
#ifndef GRAPH_H
#define GRAPH_H


class Graph {
private:
    // Internal mappings for string IDs to integer indices
    std::unordered_map<std::string, int> stopToInt;
    std::unordered_map<int, std::string> intToStop;
    int nextIndex = 0;

    // Weighted Adjacency List (Node -> vector of (DestNode, Weight))
    // We use int as weight for simpler distance representations, or double if needed.
    // The prompt requested pair<int, int> so we will use int for distance.
    std::vector<std::vector<std::pair<int, int>>> adjacencyList;

    int getOrAddNode(const std::string& stopId);

public:
    void addEdge(const std::string& srcStopId, const std::string& destStopId, int distance);

    // Dijkstra's Algorithm for finding shortest path by physical distance
    // Returns a pair: the list of Stop IDs representing the path, and the total distance
    std::pair<std::vector<std::string>, int> findShortestPath(const std::string& src, const std::string& dest);

    // BFS for finding a path with the minimum number of stops (transfers)
    std::vector<std::string> findMinStopsPath(const std::string& src, const std::string& dest);

    void displayNetwork() const;
    std::vector<std::string> exportEdges() const;
};

#endif // GRAPH_H


// --- include/Users.h ---
#ifndef USERS_H
#define USERS_H


class BusSystem;

class User {
protected:
    std::string userId;
    std::string username;
    std::string password;

public:
    User() = default;
    User(const std::string& id, const std::string& user, const std::string& pass) : userId(id), username(user), password(pass) {}
    virtual ~User() = default;

    std::string getUserId() const { return userId; }
    std::string getUsername() const { return username; }

    bool authenticate(const std::string& pass) const { return password == pass; }

    virtual void displayMenu(BusSystem& system) = 0;

    virtual std::string toString() const { return userId + "|" + username + "|" + password; }
};

class Admin : public User {
public:
    Admin() = default;
    Admin(const std::string& id, const std::string& user, const std::string& pass) : User(id, user, pass) {}

    void displayMenu(BusSystem& system) override;

    std::string toString() const override { return User::toString(); }

    static Admin fromString(const std::string& data) {
        auto tokens = Utils::split(data, '|');
        return Admin(tokens[0], tokens[1], tokens[2]);
    }
};

class Passenger : public User {
private:
    int age;
    std::string gender;

public:
    Passenger() = default;
    Passenger(const std::string& id, const std::string& name, const std::string& pass, int a, const std::string& g)
        : User(id, name, pass), age(a), gender(g) {}

    int getAge() const { return age; }
    std::string getGender() const { return gender; }

    void displayMenu(BusSystem& system) override;

    std::string toString() const override {
        return User::toString() + "|" + std::to_string(age) + "|" + gender;
    }

    static Passenger fromString(const std::string& data) {
        auto tokens = Utils::split(data, '|');
        return Passenger(tokens[0], tokens[1], tokens[2], std::stoi(tokens[3]), tokens[4]);
    }
};

#endif // USERS_H


// --- include/BusSystem.h ---
#ifndef BUSSYSTEM_H
#define BUSSYSTEM_H


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
};

#endif // BUSSYSTEM_H


// --- src/Utils.cpp ---

namespace Utils {
    std::vector<std::string> split(const std::string& str, char delimiter) {
        std::vector<std::string> tokens;
        std::string token;
        std::stringstream ss(str);
        while (std::getline(ss, token, delimiter)) {
            tokens.push_back(token);
        }
        return tokens;
    }
}


// --- src/FileManager.cpp ---

std::vector<std::string> FileManager::readLines(const std::string& filepath) {
    std::vector<std::string> lines;
    std::ifstream file(filepath);
    if (!file.is_open()) {
        std::cerr << "Could not open file: " << filepath << std::endl;
        return lines;
    }
    std::string line;
    while (std::getline(file, line)) {
        if (!line.empty()) {
            lines.push_back(line);
        }
    }
    file.close();
    return lines;
}

void FileManager::writeLines(const std::string& filepath, const std::vector<std::string>& lines) {
    std::ofstream file(filepath);
    if (!file.is_open()) {
        std::cerr << "Could not open file for writing: " << filepath << std::endl;
        return;
    }
    for (const auto& line : lines) {
        file << line << "\n";
    }
    file.close();
}

void FileManager::appendLine(const std::string& filepath, const std::string& line) {
    std::ofstream file(filepath, std::ios_base::app);
    if (!file.is_open()) {
        std::cerr << "Could not open file for appending: " << filepath << std::endl;
        return;
    }
    file << line << "\n";
    file.close();
}


// --- src/Graph.cpp ---

int Graph::getOrAddNode(const std::string& stopId) {
    if (stopToInt.find(stopId) == stopToInt.end()) {
        stopToInt[stopId] = nextIndex;
        intToStop[nextIndex] = stopId;
        adjacencyList.push_back(std::vector<std::pair<int, int>>());
        return nextIndex++;
    }
    return stopToInt[stopId];
}

void Graph::addEdge(const std::string& srcStopId, const std::string& destStopId, int distance) {
    int u = getOrAddNode(srcStopId);
    int v = getOrAddNode(destStopId);

    // Assuming undirected graph for physical distances as per typical road networks
    adjacencyList[u].push_back({v, distance});
    adjacencyList[v].push_back({u, distance});
}

std::pair<std::vector<std::string>, int> Graph::findShortestPath(const std::string& src, const std::string& dest) {
    std::vector<std::string> path;
    if (stopToInt.find(src) == stopToInt.end() || stopToInt.find(dest) == stopToInt.end()) {
        return {path, 0};
    }

    int srcNode = stopToInt[src];
    int destNode = stopToInt[dest];
    int n = adjacencyList.size();

    std::vector<int> dist(n, std::numeric_limits<int>::max());
    std::vector<int> parent(n, -1);

    // Priority queue for Min-Heap: pair<distance, node>
    std::priority_queue<std::pair<int, int>, std::vector<std::pair<int, int>>, std::greater<std::pair<int, int>>> pq;

    dist[srcNode] = 0;
    pq.push({0, srcNode});

    while (!pq.empty()) {
        auto [d, u] = pq.top();
        pq.pop();

        if (d > dist[u]) continue;
        if (u == destNode) break;

        for (const auto& edge : adjacencyList[u]) {
            int v = edge.first;
            int weight = edge.second;

            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                parent[v] = u;
                pq.push({dist[v], v});
            }
        }
    }

    if (dist[destNode] == std::numeric_limits<int>::max()) return {path, 0};

    int curr = destNode;
    while (curr != -1) {
        path.push_back(intToStop[curr]);
        curr = parent[curr];
    }
    std::reverse(path.begin(), path.end());
    return {path, dist[destNode]};
}

std::vector<std::string> Graph::findMinStopsPath(const std::string& src, const std::string& dest) {
    std::vector<std::string> path;
    if (stopToInt.find(src) == stopToInt.end() || stopToInt.find(dest) == stopToInt.end()) {
        return path;
    }

    int srcNode = stopToInt[src];
    int destNode = stopToInt[dest];
    int n = adjacencyList.size();

    std::vector<bool> visited(n, false);
    std::vector<int> parent(n, -1);

    std::queue<int> q;
    visited[srcNode] = true;
    q.push(srcNode);

    bool found = false;
    while (!q.empty()) {
        int u = q.front();
        q.pop();

        if (u == destNode) {
            found = true;
            break;
        }

        for (const auto& edge : adjacencyList[u]) {
            int v = edge.first; // Ignore weight
            if (!visited[v]) {
                visited[v] = true;
                parent[v] = u;
                q.push(v);
            }
        }
    }

    if (!found) return path;

    int curr = destNode;
    while (curr != -1) {
        path.push_back(intToStop[curr]);
        curr = parent[curr];
    }
    std::reverse(path.begin(), path.end());
    return path;
}

void Graph::displayNetwork() const {
    std::cout << "--- Road Network (Graph) ---\n";
    for (int i = 0; i < adjacencyList.size(); ++i) {
        if (intToStop.find(i) != intToStop.end()) {
            std::cout << intToStop.at(i) << " connects to:\n";
            for (const auto& edge : adjacencyList[i]) {
                int dest = edge.first;
                int weight = edge.second;
                if (intToStop.find(dest) != intToStop.end()) {
                    std::cout << "  -> " << intToStop.at(dest) << " (" << weight << " km)\n";
                }
            }
        }
    }
}

std::vector<std::string> Graph::exportEdges() const {
    std::vector<std::string> edges;
    for (int i = 0; i < adjacencyList.size(); ++i) {
        if (intToStop.find(i) != intToStop.end()) {
            for (const auto& edge : adjacencyList[i]) {
                int dest = edge.first;
                int weight = edge.second;
                if (intToStop.find(dest) != intToStop.end() && i < dest) {
                    edges.push_back("EDGE|" + intToStop.at(i) + "|" + intToStop.at(dest) + "|" + std::to_string(weight));
                }
            }
        }
    }
    return edges;
}


// --- src/Users.cpp ---

void Admin::displayMenu(BusSystem& system) {
    int choice;
    do {
        std::cout << "\n================ ADMIN PANEL ================\n";
        std::cout << "1. Add Bus\n";
        std::cout << "2. Remove Bus\n";
        std::cout << "3. View Buses\n\n";
        std::cout << "4. Add Bus Stop\n";
        std::cout << "5. Remove Bus Stop\n";
        std::cout << "6. View Bus Stops\n\n";
        std::cout << "7. Create Route\n";
        std::cout << "8. Remove Route\n";
        std::cout << "9. View Routes\n\n";
        std::cout << "10. Add Road Connection\n";
        std::cout << "11. Display Network\n\n";
        std::cout << "0. Logout\n";
        std::cout << "Select an option: ";

        if (!(std::cin >> choice)) {
            std::cin.clear();
            std::cin.ignore(10000, '\n');
            continue;
        }

        switch (choice) {
            case 1: {
                std::string num, name, rid; int cap, seats; double fare;
                std::cout << "Bus Number: "; std::cin >> num;
                std::cin.ignore();
                std::cout << "Bus Name: "; std::getline(std::cin, name);
                std::cout << "Capacity: "; std::cin >> cap;
                std::cout << "Seats: "; std::cin >> seats;
                std::cout << "Route ID: "; std::cin >> rid;
                std::cout << "Fare/Km: "; std::cin >> fare;
                system.addBus(Bus(num, name, cap, seats, rid, fare));
                std::cout << "Bus added successfully.\n";
                break;
            }
            case 2: {
                std::string num;
                std::cout << "Bus Number to remove: "; std::cin >> num;
                system.removeBus(num);
                std::cout << "Bus removed.\n";
                break;
            }
            case 3:
                system.displayBuses();
                break;
            case 4: {
                std::string id, name, loc;
                std::cout << "Stop ID: "; std::cin >> id;
                std::cin.ignore();
                std::cout << "Stop Name: "; std::getline(std::cin, name);
                std::cout << "Location: "; std::getline(std::cin, loc);
                system.addStop(BusStop(id, name, loc));
                std::cout << "Stop added successfully.\n";
                break;
            }
            case 5: {
                std::string id;
                std::cout << "Stop ID to remove: "; std::cin >> id;
                system.removeStop(id);
                std::cout << "Stop removed.\n";
                break;
            }
            case 6:
                system.displayStops();
                break;
            case 7: {
                std::string id, name, stopId;
                std::vector<std::string> stopIds;
                std::cout << "Route ID: "; std::cin >> id;
                std::cin.ignore();
                std::cout << "Route Name: "; std::getline(std::cin, name);

                std::cout << "Enter Stop IDs in order (enter 0 to finish):\n";
                while (true) {
                    std::cout << "Stop ID: "; std::cin >> stopId;
                    if (stopId == "0") break;
                    stopIds.push_back(stopId);
                }

                Route r(id, name, stopIds);
                system.addRoute(r);
                std::cout << "Route added successfully with " << stopIds.size() << " stops.\n";
                break;
            }
            case 8: {
                std::string id;
                std::cout << "Route ID to remove: "; std::cin >> id;
                system.removeRoute(id);
                std::cout << "Route removed.\n";
                break;
            }
            case 9:
                system.displayRoutes();
                break;
            case 10: {
                std::string srcName, destName; int dist;
                std::cin.ignore();
                std::cout << "Beginning: "; std::getline(std::cin, srcName);
                std::cout << "Stop: "; std::getline(std::cin, destName);
                std::cout << "Distance (km): "; std::cin >> dist;

                std::string srcId = system.getStopIdByName(srcName);
                std::string destId = system.getStopIdByName(destName);

                if (srcId.empty() || destId.empty()) {
                    std::cout << "Error: One or both stop names are invalid.\n";
                    break;
                }

                system.addDistance(srcId, destId, dist);
                std::cout << "Road added successfully.\n";
                break;
            }
            case 11:
                system.displayNetwork();
                break;
            case 0:
                std::cout << "Logging out...\n";
                break;
            default:
                std::cout << "Invalid choice!\n";
        }
    } while (choice != 0);
}

void Passenger::displayMenu(BusSystem& system) {
    int choice;
    do {
        std::cout << "\n================ USER PANEL ================\n";
        std::cout << "1. Search Bus\n";
        std::cout << "2. View Bus Stops\n";
        std::cout << "3. Find Route\n";
        std::cout << "4. Find Shortest Route\n";
        std::cout << "5. Book Ticket\n";
        std::cout << "6. Cancel Ticket\n";
        std::cout << "7. View My Booking\n";
        std::cout << "8. View Bus Details\n";
        std::cout << "9. View All Buses and Routes\n";
        std::cout << "0. Logout\n";
        std::cout << "Select an option: ";

        if (!(std::cin >> choice)) {
            std::cin.clear();
            std::cin.ignore(10000, '\n');
            continue;
        }

        switch (choice) {
            case 1: {
                std::string bNum;
                std::cout << "Enter Bus Number: "; std::cin >> bNum;
                system.displayBusDetails(bNum);
                break;
            }
            case 2:
                system.displayStops();
                break;
            case 3: {
                std::string srcName, destName;
                std::cin.ignore();
                std::cout << "Beginning: "; std::getline(std::cin, srcName);
                std::cout << "Stop: "; std::getline(std::cin, destName);

                std::string src = system.getStopIdByName(srcName);
                std::string dest = system.getStopIdByName(destName);
                if (src.empty() || dest.empty()) {
                    std::cout << "Error: Invalid stop names.\n";
                    break;
                }

                auto path = system.findRouteBFS(src, dest);
                if (path.empty()) {
                    std::cout << "No route found.\n";
                } else {
                    std::cout << "\n========================================\n";
                    std::cout << "           FEWEST STOPS ROUTE\n";
                    std::cout << "========================================\n\n";
                    std::cout << "Source      : " << system.getStopName(src) << "\n";
                    std::cout << "Destination : " << system.getStopName(dest) << "\n\n";
                    std::cout << "Route:\n";
                    for (size_t i = 0; i < path.size(); ++i) {
                        std::cout << system.getStopName(path[i]) << "\n";
                        if (i != path.size() - 1) std::cout << "    ↓\n";
                    }
                }
                break;
            }
            case 4: {
                std::string srcName, destName;
                std::cin.ignore();
                std::cout << "Beginning: "; std::getline(std::cin, srcName);
                std::cout << "Stop: "; std::getline(std::cin, destName);

                std::string src = system.getStopIdByName(srcName);
                std::string dest = system.getStopIdByName(destName);
                if (src.empty() || dest.empty()) {
                    std::cout << "Error: Invalid stop names.\n";
                    break;
                }

                auto result = system.findShortestRoute(src, dest);
                if (result.first.empty()) {
                    std::cout << "No route found.\n";
                } else {
                    std::cout << "\n========================================\n";
                    std::cout << "           SHORTEST ROUTE\n";
                    std::cout << "========================================\n\n";
                    std::cout << "Source      : " << system.getStopName(src) << "\n";
                    std::cout << "Destination : " << system.getStopName(dest) << "\n\n";
                    std::cout << "Route:\n";
                    for (size_t i = 0; i < result.first.size(); ++i) {
                        std::cout << system.getStopName(result.first[i]) << "\n";
                        if (i != result.first.size() - 1) std::cout << "    ↓\n";
                    }
                    std::cout << "\nTotal Distance: " << result.second << " km\n";
                }
                break;
            }
            case 5: {
                std::string srcName, destName;
                std::cin.ignore();
                std::cout << "Beginning: "; std::getline(std::cin, srcName);
                std::cout << "Stop: "; std::getline(std::cin, destName);

                std::string src = system.getStopIdByName(srcName);
                std::string dest = system.getStopIdByName(destName);
                if (src.empty() || dest.empty()) {
                    std::cout << "Error: Invalid stop names.\n";
                    break;
                }
                system.bookTicket(userId, username, password, age, gender, "", src, dest);
                break;
            }
            case 6: {
                std::string bkgId;
                std::cout << "Enter Booking ID: "; std::cin >> bkgId;
                system.cancelTicket(bkgId);
                break;
            }
            case 7: {
                std::cout << "--- My Bookings ---\n";
                system.displayBookingsForUser(userId);
                break;
            }
            case 8: {
                std::string bNum;
                std::cout << "Enter Bus Number: "; std::cin >> bNum;
                system.displayBusDetails(bNum);
                break;
            }
            case 9:
                system.displayBuses();
                break;
            case 0:
                std::cout << "Logging out...\n";
                break;
            default:
                std::cout << "Invalid choice!\n";
        }
    } while (choice != 0);
}


// --- src/BusSystem.cpp ---

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


// --- main.cpp ---


void printInstructions() {
    std::cout << "\n=======================================================\n";
    std::cout << "         WELCOME TO THE BUS ROUTE MANAGEMENT SYSTEM      \n";
    std::cout << "=======================================================\n";
    std::cout << "INSTRUCTIONS:\n";
    std::cout << "- This system handles physical network routes and buses.\n";
    std::cout << "- Default Admin Credentials: Username: admin | Password: admin123\n";
    std::cout << "- Passenger Login: Create any ID, Name, and Password to log in.\n";
    std::cout << "- If data files are empty, a sample network is auto-generated.\n";
    std::cout << "=======================================================\n";
    std::cout << "Press ENTER to continue...";
    std::cin.get();
}

int main() {
    printInstructions();

    BusSystem system("data");

    int choice;
    do {
        std::cout << "\n========================================\n";
        std::cout << "     BUS ROUTE MANAGEMENT SYSTEM\n";
        std::cout << "========================================\n\n";
        std::cout << "1. Admin Login\n";
        std::cout << "2. User\n";
        std::cout << "3. Exit\n";
        std::cout << "Enter choice: ";

        if (!(std::cin >> choice)) {
            std::cin.clear();
            std::cin.ignore(10000, '\n');
            continue;
        }

        switch (choice) {
            case 1: {
                std::string user, pass;
                std::cout << "\n=== Admin Login ===\n";
                std::cout << "Username: ";
                std::cin >> user;
                std::cout << "Password: ";
                std::cin >> pass;

                // Demo credentials
                if (user == "admin" && pass == "admin123") {
                    std::cout << "Login successful.\n";
                    Admin admin("admin", user, pass);
                    admin.displayMenu(system);
                } else {
                    std::cout << "Invalid credentials.\n";
                }
                break;
            }
            case 2: {
                // For demo purposes, we will just create a default passenger or ask for login
                std::string pId, pName, pPass;
                std::cout << "\n=== User Login / Registration ===\n";
                std::cout << "Passenger ID: ";
                std::cin >> pId;
                std::cin.ignore();
                std::cout << "Name: ";
                std::getline(std::cin, pName);
                std::cout << "Password: ";
                std::cin >> pPass;

                Passenger passenger(pId, pName, pPass, 20, "U"); // Demo age and gender
                passenger.displayMenu(system);
                break;
            }
            case 3:
                std::cout << "Exiting...\n";
                break;
            default:
                std::cout << "Invalid choice!\n";
        }
    } while (choice != 3);

    return 0;
}

