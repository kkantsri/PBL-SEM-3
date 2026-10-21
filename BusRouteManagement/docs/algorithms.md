# Algorithms

## Breadth-First Search (BFS)
- **Purpose**: Used to find a route between two bus stops that requires the fewest number of intermediate stops (transfers).
- **Data Structures**: 
  - `std::queue` for level-order traversal.
  - `std::unordered_map` to track visited nodes and path parent-pointers.
- **Time Complexity**: O(V + E), where V is the number of stops and E is the number of road connections.
- **Space Complexity**: O(V) for the queue and visited map.

## Dijkstra's Shortest Path
- **Purpose**: Used to find the minimum-distance route between two bus stops, factoring in the physical km distance of the roads.
- **Data Structures**: 
  - `std::priority_queue` (min-heap) to continually extract the closest unvisited node.
  - `std::unordered_map` for distance tracking and path reconstruction.
- **Relaxation**: Updates the shortest known distance to adjacent stops if the current path offers a smaller value.
- **Path Reconstruction**: Backtracks from the destination node to the source node using a parent map.
- **Time Complexity**: O(E log V)
- **Space Complexity**: O(V)
