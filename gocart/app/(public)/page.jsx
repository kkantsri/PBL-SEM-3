'use client'
import SlatShutterHero from "@/components/SlatShutterHero";
import Hero from "@/components/Hero";
import PopularRoutes from "@/components/PopularRoutes";
import TopOperators from "@/components/TopOperators";
import WhyBusGo from "@/components/WhyBusGo";
import Newsletter from "@/components/Newsletter";
import StickerSlapFooter from "@/components/StickerSlapFooter";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-white">
            <SlatShutterHero
                coverSrc="/mountain-bus.jpg"
                revealSrc="/half-dome.jpg"
                kicker="Verified & Safe Mountain Transit"
                coverTitle={["Safe Journeys Through Every Mile,", "Travel with Complete Trust"]}
                revealTitle={["Live GPS Tracking & Certified Fleets,", "Arrive Safely, Every Single Time"]}
                caption="24/7 passenger emergency support, sanitized coaches, vetted professional drivers, and live GPS route monitoring across all corridors."
            />
            {/* From 2nd Slide Onwards: All subsequent slides have the 2nd image (Half Dome) - Transparent & Crystal Clear */}
            <div
                className="relative bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage: "url('/half-dome.jpg')",
                }}
            >
                <Hero />
                <PopularRoutes />
                <TopOperators />
                <WhyBusGo />
                <Newsletter />
                <StickerSlapFooter paper="transparent" panel="rgba(18, 18, 26, 0.65)" />
            </div>
        </main>
    );
}
