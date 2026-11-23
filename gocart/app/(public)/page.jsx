'use client'
import SlatShutterHero from "@/components/SlatShutterHero";
import FocusCardsDemo from "@/components/FocusCardsDemo";
import TopOperators from "@/components/TopOperators";
import WhyBusGo from "@/components/WhyBusGo";
import Newsletter from "@/components/Newsletter";
import StickerSlapFooter from "@/components/StickerSlapFooter";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#050508] text-zinc-100 selection:bg-zinc-800 selection:text-white">
            {/* 1st Slide: Mountain Bus Image Only
                2nd Slide: Slat shutter reveals deep black background with 3D Globe covering whole page + Search/Booking Components */}
            <SlatShutterHero
                coverSrc="/mountain-bus.jpg"
                kicker="Verified & Safe Mountain Transit"
                coverTitle={["Safe Journeys Through Every Mile,", "Travel with Complete Trust."]}
                caption="24/7 passenger emergency support, sanitized coaches, vetted professional drivers, and live GPS route monitoring across all corridors."
            />

            {/* From 2nd Slide Onwards: Deep black background (#050508) for all subsequent sections */}
            <div className="relative bg-[#050508]">
                {/* 3rd Section: Merged Local Routes & Outer Getaways in Focus Cards */}
                <FocusCardsDemo />

                {/* Subsequent Sections */}
                <TopOperators />
                <WhyBusGo />
                <Newsletter />
                <StickerSlapFooter paper="transparent" panel="rgba(18, 18, 26, 0.65)" />
            </div>
        </main>
    );
}
