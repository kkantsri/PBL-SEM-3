'use client'
import SlatShutterHero from "@/components/SlatShutterHero";
import Hero from "@/components/Hero";
import PopularRoutes from "@/components/PopularRoutes";
import TopOperators from "@/components/TopOperators";
import WhyBusGo from "@/components/WhyBusGo";
import Newsletter from "@/components/Newsletter";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-white">
            <SlatShutterHero />
            <Hero />
            <PopularRoutes />
            <TopOperators />
            <WhyBusGo />
            <Newsletter />
        </main>
    );
}
