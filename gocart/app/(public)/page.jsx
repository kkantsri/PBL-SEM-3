'use client'
import SlatShutterHero from "@/components/SlatShutterHero";
import StickerSlapFooter from "@/components/StickerSlapFooter";
import PopularRoutes from "@/components/PopularRoutes";
import TopOperators from "@/components/TopOperators";
import WhyBusGo from "@/components/WhyBusGo";
import Newsletter from "@/components/Newsletter";

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
            {/* Second Page As You Scroll */}
            <section className="relative z-10 w-full">
                <StickerSlapFooter showSearch={true} />
            </section>
            <PopularRoutes />
            <TopOperators />
            <WhyBusGo />
            <Newsletter />
        </main>
    );
}
