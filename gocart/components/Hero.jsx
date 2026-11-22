'use client'
import SearchWidget from "@/components/SearchWidget";
import { ShieldCheck, Sparkles, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-black via-[#09090b] to-[#0d0d11] text-white pt-16 pb-20 px-4 sm:px-6 border-t border-white/5">
            
            {/* Background Ambient Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-500/10 blur-3xl pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Headline Badge */}
                <div className="flex justify-center mb-5">
                    <div className="inline-flex items-center gap-2 bg-white/5 text-zinc-300 px-4 py-1.5 rounded-full text-xs font-semibold border border-white/10 shadow-inner">
                        <Sparkles size={14} className="text-blue-400" />
                        <span>Dijkstra-Powered Campus & City Bus Booking</span>
                    </div>
                </div>

                {/* Main Heading */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
                        Travel Made Simple. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300">
                            Book Local Buses
                        </span> in Seconds.
                    </h1>
                    <p className="mt-4 text-base sm:text-lg text-zinc-400 font-normal max-w-2xl mx-auto leading-relaxed">
                        Instant seat booking across Clement Town, ISBT Dehradun, Clock Tower, Rajpur Road, and campus corridors with real-time route optimization.
                    </p>
                </div>

                {/* The Core Search Widget */}
                <div className="mb-12">
                    <SearchWidget />
                </div>

                {/* Promo Strip */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8">
                    <div className="flex items-center gap-3 bg-zinc-900/90 p-4 rounded-2xl border border-zinc-800 shadow-md">
                        <div className="size-10 rounded-xl bg-zinc-800 border border-white/10 text-blue-400 flex items-center justify-center shrink-0">
                            <Tag size={18} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-white">Use Code FIRSTBUS</p>
                            <p className="text-[11px] text-zinc-400">Get 20% instant discount on 1st trip</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 bg-zinc-900/90 p-4 rounded-2xl border border-zinc-800 shadow-md">
                        <div className="size-10 rounded-xl bg-zinc-800 border border-white/10 text-emerald-400 flex items-center justify-center shrink-0">
                            <ShieldCheck size={18} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-white">100% Refund Guarantee</p>
                            <p className="text-[11px] text-zinc-400">Instant cancellations with no questions</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 bg-zinc-900/90 p-4 rounded-2xl border border-zinc-800 shadow-md">
                        <div className="size-10 rounded-xl bg-zinc-800 border border-white/10 text-purple-400 flex items-center justify-center shrink-0">
                            <Sparkles size={18} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-white">Live Dijkstra Router</p>
                            <p className="text-[11px] text-zinc-400">Calculates shortest transit route live</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
