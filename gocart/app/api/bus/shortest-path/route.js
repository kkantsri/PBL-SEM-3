import { NextResponse } from "next/server";
import { runCppCommand } from "@/lib/cppBridge";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const src = searchParams.get("src");
    const dest = searchParams.get("dest");

    if (!src || !dest) {
        return NextResponse.json({ success: false, error: "src and dest query parameters are required" }, { status: 400 });
    }

    try {
        const pathData = await runCppCommand(["--shortest-path", src, dest]);
        return NextResponse.json({ success: true, ...pathData });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
