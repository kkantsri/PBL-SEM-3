#ifndef FILEMANAGER_H
#define FILEMANAGER_H

#include <vector>
#include <string>

class FileManager {
public:
    static std::vector<std::string> readLines(const std::string& filepath);
    static void writeLines(const std::string& filepath, const std::vector<std::string>& lines);
    static void appendLine(const std::string& filepath, const std::string& line);
};

#endif // FILEMANAGER_H
