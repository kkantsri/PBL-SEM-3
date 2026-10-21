import { execFile } from "child_process";
import path from "path";
import fs from "fs";

function resolveCppDir() {
    const candidates = [
        path.resolve(process.cwd(), "../BusRouteManagement"),
        path.resolve(process.cwd(), "BusRouteManagement"),
        path.resolve(process.cwd(), "../backend"),
        path.resolve(process.cwd(), "backend"),
    ];
    for (const dir of candidates) {
        if (fs.existsSync(path.join(dir, "bus_api")) || fs.existsSync(path.join(dir, "src/bus_api.cpp"))) {
            return dir;
        }
    }
    return path.resolve(process.cwd(), "../BusRouteManagement");
}

const CPP_DIR = resolveCppDir();
const BINARY_PATH = path.join(CPP_DIR, "bus_api");
const DATA_PATH = path.join(CPP_DIR, "data");

export function runCppCommand(args) {
    return new Promise((resolve, reject) => {
        const fullArgs = [...args, "--data-path", DATA_PATH];
        execFile(BINARY_PATH, fullArgs, { cwd: CPP_DIR }, (error, stdout, stderr) => {
            if (error) {
                console.error("C++ Backend Execution Error:", error, stderr);
                return reject(error);
            }
            try {
                // Find json part in stdout (in case BusSystem outputs any debug lines)
                const trimmed = stdout.trim();
                const jsonStart = trimmed.indexOf("[") !== -1 && (trimmed.indexOf("{") === -1 || trimmed.indexOf("[") < trimmed.indexOf("{"))
                    ? trimmed.indexOf("[")
                    : trimmed.indexOf("{");
                
                if (jsonStart !== -1) {
                    const jsonStr = trimmed.slice(jsonStart);
                    const parsed = JSON.parse(jsonStr);
                    return resolve(parsed);
                }
                return resolve({ raw: trimmed });
            } catch (parseErr) {
                console.error("Failed to parse C++ output as JSON:", stdout);
                return resolve({ raw: stdout.trim() });
            }
        });
    });
}
