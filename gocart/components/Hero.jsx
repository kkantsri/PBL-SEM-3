'use client'
import { ShieldCheck, Sparkles, Tag } from "lucide-react";

const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-black via-[#09090b] to-[#0d0d11] text-white pt-6 pb-12 px-4 sm:px-6 border-none">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-blue-500/10 blur-3xl pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Promo Strip */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
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
