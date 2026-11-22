'use client'
import HomeHeroLandingScrollAnimation from "@/components/HomeHeroLandingScrollAnimation";
import Hero from "@/components/Hero";
import PopularRoutes from "@/components/PopularRoutes";
import TopOperators from "@/components/TopOperators";
import WhyBusGo from "@/components/WhyBusGo";
import Newsletter from "@/components/Newsletter";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50/50">
            <HomeHeroLandingScrollAnimation />
            <Hero />
            <PopularRoutes />
            <TopOperators />
            <WhyBusGo />
            <Newsletter />
        </main>
    );
}
