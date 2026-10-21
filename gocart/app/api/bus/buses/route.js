import { NextResponse } from "next/server";
import { runCppCommand } from "@/lib/cppBridge";

export async function GET() {
    try {
        const buses = await runCppCommand(["--get-buses"]);
        return NextResponse.json({ success: true, buses });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
