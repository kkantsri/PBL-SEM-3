#include "Graph.h"
#include <queue>
#include <algorithm>
#include <limits>
#include <iostream>

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
