# Architecture

The Bus Route Management System uses a modular, layered Object-Oriented design.

## Core Components
- **User Hierarchy**: A base `User` class acts as the foundation, with `Admin` and `Passenger` inheriting from it. This enforces encapsulation and enables polymorphism via `displayMenu()`.
- **BusSystem (Controller)**: Acts as the central manager, aggregating vectors of `Bus`, `BusStop`, `Route`, `Passenger`, `Booking`, and the `Graph`.
- **Data Persistence**: A utility `FileManager` handles writing and reading string-serialized objects (`|` delimited) to text files in the `data/` directory.

## Separation of Concerns
1. **Presentation (UI)**: Command-line interface isolated inside `Admin::displayMenu` and `Passenger::displayMenu`.
2. **Business Logic**: Core calculations (fare, graph traversal, booking queueing) happen inside the `BusSystem` and `Graph`.
3. **Data Access**: Disk I/O is abstracted completely by `FileManager`.
