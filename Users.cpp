#include "Users.h"
#include "BusSystem.h"
#include <iostream>
#include <sstream>

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
