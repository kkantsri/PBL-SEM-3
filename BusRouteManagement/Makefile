CXX = g++
CXXFLAGS = -std=c++17 -Wall -Wextra -Iinclude -O2
SRCS = src/BusSystem.cpp src/FileManager.cpp src/Graph.cpp src/Users.cpp src/Utils.cpp

all: BusRouteManagement bus_api

BusRouteManagement: main.cpp $(SRCS)
	$(CXX) $(CXXFLAGS) main.cpp $(SRCS) -o BusRouteManagement

bus_api: bus_api.cpp $(SRCS)
	$(CXX) $(CXXFLAGS) bus_api.cpp $(SRCS) -o bus_api

clean:
	rm -f BusRouteManagement bus_api
