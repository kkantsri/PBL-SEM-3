#include "FileManager.h"
#include <fstream>
#include <iostream>

std::vector<std::string> FileManager::readLines(const std::string& filepath) {
    std::vector<std::string> lines;
    std::ifstream file(filepath);
    if (!file.is_open()) {
        std::cerr << "Could not open file: " << filepath << std::endl;
        return lines;
    }
    std::string line;
    while (std::getline(file, line)) {
        if (!line.empty()) {
            lines.push_back(line);
        }
    }
    file.close();
    return lines;
}

void FileManager::writeLines(const std::string& filepath, const std::vector<std::string>& lines) {
    std::ofstream file(filepath);
    if (!file.is_open()) {
        std::cerr << "Could not open file for writing: " << filepath << std::endl;
        return;
    }
    for (const auto& line : lines) {
        file << line << "\n";
    }
    file.close();
}

void FileManager::appendLine(const std::string& filepath, const std::string& line) {
    std::ofstream file(filepath, std::ios_base::app);
    if (!file.is_open()) {
        std::cerr << "Could not open file for appending: " << filepath << std::endl;
        return;
    }
    file << line << "\n";
    file.close();
}
