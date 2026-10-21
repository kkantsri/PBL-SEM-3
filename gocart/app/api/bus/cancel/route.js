import { NextResponse } from "next/server";
import { runCppCommand } from "@/lib/cppBridge";

export async function POST(request) {
    try {
        const body = await request.json();
        const { bookingId } = body;

        if (!bookingId) {
            return NextResponse.json({ success: false, message: "bookingId is required" }, { status: 400 });
        }

        const result = await runCppCommand(["--cancel", String(bookingId)]);
        return NextResponse.json(result);
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
