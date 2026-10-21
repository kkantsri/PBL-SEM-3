import { NextResponse } from "next/server";
import { runCppCommand } from "@/lib/cppBridge";

export async function POST(request) {
    try {
        const body = await request.json();
        const {
            passengerId = "1",
            passengerName = "Traveler",
            age = 25,
            gender = "Male",
            busNumber = "204",
            src = "1",
            dest = "5",
        } = body;

        // Execute C++ book command
        const result = await runCppCommand([
            "--book",
            String(passengerId),
            String(passengerName),
            String(age),
            String(gender),
            String(busNumber),
            String(src),
            String(dest),
        ]);

        return NextResponse.json(result);
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
