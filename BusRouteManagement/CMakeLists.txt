cmake_minimum_required(VERSION 3.10)
project(BusRouteManagement)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

include_directories(include)

file(GLOB SOURCES "src/*.cpp")
add_executable(BusRouteManagement main.cpp ${SOURCES})
add_executable(bus_api bus_api.cpp ${SOURCES})
