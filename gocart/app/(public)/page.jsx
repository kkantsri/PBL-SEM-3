'use client'
import SlatShutterHero from "@/components/SlatShutterHero";
import Hero from "@/components/Hero";
import PopularRoutes from "@/components/PopularRoutes";
import TopOperators from "@/components/TopOperators";
import WhyBusGo from "@/components/WhyBusGo";
import Newsletter from "@/components/Newsletter";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50/50">
            <SlatShutterHero
                kicker="C++ Algorithmic Transit Engine"
                coverTitle={["Travel Across Dehradun", "Smart, Fast & Seamless"]}
                revealTitle={["Shortest Dijkstra Routes", "Book Your Seats in Seconds"]}
                caption="Optimized transit connecting Clement Town, ISBT, Clock Tower, Rajpur Road, and campus corridors."
                coverSrc="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80"
                revealSrc="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=2000&q=80"
                slats={8}
                length={2.2}
            />
            <Hero />
            <PopularRoutes />
            <TopOperators />
            <WhyBusGo />
            <Newsletter />
        </main>
    );
}
