import { NextResponse } from "next/server";
import { runCppCommand } from "@/lib/cppBridge";

export async function GET() {
    try {
        const stops = await runCppCommand(["--get-stops"]);
        return NextResponse.json({ success: true, stops });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
