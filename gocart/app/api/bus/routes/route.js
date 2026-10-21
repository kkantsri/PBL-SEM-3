import { NextResponse } from "next/server";
import { runCppCommand } from "@/lib/cppBridge";

export async function GET() {
    try {
        const routes = await runCppCommand(["--get-routes"]);
        return NextResponse.json({ success: true, routes });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
