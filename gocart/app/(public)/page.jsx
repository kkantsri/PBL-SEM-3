'use client'
import SlatShutterHero from "@/components/SlatShutterHero";
import FocusCardsDemo from "@/components/FocusCardsDemo";
import TopOperators from "@/components/TopOperators";
import WhyBusGo from "@/components/WhyBusGo";
import Newsletter from "@/components/Newsletter";
import StickerSlapFooter from "@/components/StickerSlapFooter";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-white">
            {/* 1st Slide: Mountain Bus Image Only
                2nd Slide: Slat shutter reveals 2nd Image (Half Dome) + All Search/Booking Components directly on the 2nd slide */}
            <SlatShutterHero
                coverSrc="/mountain-bus.jpg"
                revealSrc="/half-dome.jpg"
                kicker="Verified & Safe Mountain Transit"
                coverTitle={["Safe Journeys Through Every Mile,", "Travel with Complete Trust"]}
                caption="24/7 passenger emergency support, sanitized coaches, vetted professional drivers, and live GPS route monitoring across all corridors."
            />

            {/* From 2nd Slide Onwards: All subsequent sections over the 2nd image (Half Dome) - Transparent & Crystal Clear */}
            <div
                className="relative bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage: "url('/half-dome.jpg')",
                }}
            >
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
