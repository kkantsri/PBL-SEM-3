import { NextResponse } from "next/server";
import { runCppCommand } from "@/lib/cppBridge";

export async function GET() {
    try {
        const bookings = await runCppCommand(["--get-bookings"]);
        return NextResponse.json({ success: true, bookings });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
