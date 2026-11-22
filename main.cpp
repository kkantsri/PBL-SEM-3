#include <iostream>
#include <string>
#include "BusSystem.h"

#include "Users.h"

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
