'use client'
import SearchWidget from "@/components/SearchWidget";
import { ShieldCheck, Sparkles, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-slate-50 pt-10 pb-16 px-4 sm:px-6">
            
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-400/10 blur-3xl pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Headline Badge */}
                <div className="flex justify-center mb-4">
                    <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold border border-blue-200 shadow-xs">
                        <Sparkles size={14} className="text-blue-600" />
                        <span>India&apos;s #1 Smart Bus Booking Experience</span>
                    </div>
                </div>

                {/* Main Heading */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                        Travel Made Simple. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Book Bus Tickets
                        </span> in Seconds.
                    </h1>
                    <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto">
                        Search 20+ luxury & express operators, choose your favourite window or sleeper seat, and enjoy guaranteed on-time departure.
                    </p>
                </div>

                {/* The Core Search Widget */}
                <div className="mb-10">
                    <SearchWidget />
                </div>

                {/* Promo Strip */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-6">
                    <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
                        <div className="size-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                            <Tag size={18} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-800">Use Code FIRSTBUS</p>
                            <p className="text-[11px] text-slate-500">Get 20% instant discount on 1st trip</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
                        <div className="size-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                            <ShieldCheck size={18} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-800">100% Refund Guarantee</p>
                            <p className="text-[11px] text-slate-500">Instant cancellations with no questions</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
                        <div className="size-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                            <Sparkles size={18} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-800">Live GPS Tracking</p>
                            <p className="text-[11px] text-slate-500">Track bus location anytime on mobile</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
