# Bus Route Optimizer & Ticket Booking Platform (BusGo)

> **Course:** Data Structures and Programming in C++ (`DSCPP-III-2026-T037`)  
> **Academic Project:** Project-Based Learning (PBL) — Semester 3  
> **Documentation:** Refer to [`Phase-1-filled (1).tex`](./Phase-1-filled%20(1).tex) for the complete phase 1 project proposal.

---

## 👥 Team Information

| Role | Name | Student ID | Email |
| :--- | :--- | :--- | :--- |
| **Team Lead** | Krishna Kant | 2510380211 | `2510380211@geu.ac.in` |
| **Member 2** | Agrima Mishra | 2512510019 | `2512510019@geu.ac.in` |
| **Member 3** | Aditi Singh | 2510012426 | `2510012426@geu.ac.in` |
| **Member 4** | Akhil Gahlawat | 2510012465 | `2510012465@geu.ac.in` |

---

## 🚀 Project Overview

**Bus Route Optimizer** is a complete, full-stack bus transportation and ticket management system. It pairs a high-performance **C++17 algorithmic engine** with a modern **Next.js e-commerce web platform ("BusGo")**.

### Core Capabilities:
1. **Algorithmic Route Finding:**
   - **Dijkstra's Algorithm** (using min-heaps / `std::priority_queue`) to find the shortest distance route between bus stops.
   - **Breadth-First Search (BFS)** to discover routes with the minimum number of interchange stops.
2. **High-Performance Data Structures:**
   - Road network modeled as a **weighted directed graph** with adjacency lists.
   - $O(1)$ fast lookups using `std::unordered_map` for buses, routes, stops, and tickets.
   - Queue-based passenger waiting lists and ticketing queues.
3. **Data Persistence:**
   - File-based persistence system loading and storing stops, buses, routes, and tickets from structured text databases (`data/*.txt`).
4. **Full-Stack Web Interface (BusGo):**
   - Search trips by source, destination, date, and bus type.
   - Interactive seat map supporting 2+2 and 2+1 sleeper/seater configurations.
   - Passenger checkout, coupon discounts, and instant printable E-Ticket generation.
   - Live JSON bridge (`bus_api`) connecting Next.js API routes directly to the C++ engine.

---

## 📁 Repository Structure

```
PBL-SEM-3/
├── Phase-1-filled (1).tex    # PBL Phase 1 LaTeX project proposal & documentation
├── README.md                 # Project overview and instructions
│
├── BusRouteManagement/       # C++ DSA Core Engine
│   ├── Makefile              # Build automation (make all, make BusRouteManagement, make bus_api)
│   ├── CMakeLists.txt        # CMake build configuration
│   ├── bus_api.cpp           # JSON CLI bridge interfacing with Next.js
│   ├── full_code.cpp         # Consolidated single-file C++ program
│   ├── main.cpp              # Interactive terminal CLI entrypoint
│   ├── include/              # Modular C++ header files
│   │   ├── BusSystem.h       # System orchestration and management
│   │   ├── Graph.h           # Graph representation, Dijkstra & BFS algorithms
│   │   ├── Models.h          # Bus, Route, Stop, and Ticket models
│   │   ├── Users.h           # Admin and Passenger user management
│   │   └── FileManager.h     # File I/O persistence
│   ├── src/                  # Implementation files
│   ├── data/                 # File persistence storage (buses, stops, routes, tickets)
│   └── docs/                 # Architecture, algorithm, and schema docs
│
└── gocart/                   # Full-Stack Web Platform (Next.js 15 + Tailwind CSS + Redux)
    ├── package.json          # Dependencies and scripts
    ├── app/                  # Next.js App Router (Public pages & Admin dashboard)
    │   ├── api/bus/          # API endpoints bridging to C++ engine
    │   │   ├── shortest-path/ # Calls Dijkstra algorithm via bus_api
    │   │   ├── routes/       # Queries routes from C++ system
    │   │   ├── buses/        # Queries bus fleet
    │   │   └── book/         # Handles booking requests
    │   └── ...
    ├── components/           # UI components (Hero, SeatMap, TicketModal, SearchWidget)
    ├── lib/                  # Redux slices and C++ execution bridge (cppBridge.js)
    └── assets/               # Bus trips, cities, seat layouts, and image assets
```

---

## 🛠️ How to Build & Run

### 1. C++ Algorithmic Engine & CLI

Navigate to the `BusRouteManagement` directory:

```bash
cd BusRouteManagement

# Build both terminal application and JSON bridge using make:
make all

# Run the interactive terminal CLI:
./BusRouteManagement

# Test the JSON bridge directly (e.g. Dijkstra between Stop 1 and Stop 4):
./bus_api --action shortest-path --source 1 --dest 4
```

### 2. Next.js Web Application (BusGo)

Navigate to the `gocart` directory:

```bash
cd gocart

# Install dependencies:
npm install

# Run the Next.js development server:
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001`) in your browser to explore the platform.

---

## 📊 Algorithms & Complexity Analysis

| Feature | Algorithm / Data Structure | Time Complexity | Space Complexity |
| :--- | :--- | :--- | :--- |
| Shortest Distance Route | Dijkstra (Priority Queue) | $O((V + E) \log V)$ | $O(V + E)$ |
| Minimum Stop Route | Breadth-First Search (BFS) | $O(V + E)$ | $O(V)$ |
| Entity Lookup (Bus/Stop) | Hash Table (`unordered_map`) | $O(1)$ average | $O(N)$ |
| Waiting List Management | First-In-First-Out Queue (`queue`) | $O(1)$ enqueue/dequeue | $O(P)$ |

---

## 📜 License
Developed for academic submission under the **Project-Based Learning (PBL) Semester 3** curriculum at Graphic Era University.
