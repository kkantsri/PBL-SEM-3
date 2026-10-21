#ifndef GRAPH_H
#define GRAPH_H

#include <vector>
#include <string>
#include <unordered_map>
#include <utility>

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
