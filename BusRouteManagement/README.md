# Bus Route Management System

A complete, modular console-based application built in C++17 for managing buses, stops, routes, passenger bookings, and a city transportation network.

## Features
- **Object-Oriented Design**: Utilizes abstraction, encapsulation, inheritance (`User` base class), and polymorphism.
- **Graph Networking**: Features a custom `Graph` structure using adjacency lists to map physical road networks between bus stops.
- **Advanced Pathfinding**:
  - Breadth-First Search (BFS) to find the route with the fewest stops (minimum transfers).
  - Dijkstra's Algorithm (via `std::priority_queue`) to find the shortest physical distance (km) route.
- **Booking & Waitlist System**: Passengers can book tickets and calculate distance-based fares. Full buses automatically route passengers into a `std::queue` waitlist. Cancellations automatically pull from the waitlist.
- **File Persistence**: Custom text-serialization using the `|` delimiter saves all state data upon exit and re-loads upon startup.

## Technologies Used
- **C++17**
- **CMake**

## Installation and Compilation

### Using CMake (Recommended)
1. Ensure you have `cmake` and `make` installed.
2. Build the project:
   ```bash
   mkdir build && cd build
   cmake ..
   make
   ```
3. Run the executable:
   ```bash
   ./BusRouteManagement
   ```

### Using raw GCC
```bash
g++ -std=c++17 -Iinclude main.cpp src/*.cpp -o BusRouteManagement
./BusRouteManagement
```

## Sample Usage
If no data exists in the `data/` directory, the system will auto-initialize a sample network.
- **Admin**: Login with `admin` / `admin123` to manage buses, routes, and road connections.
- **Passenger**: Search for routes, view network graphs, and book tickets automatically.
