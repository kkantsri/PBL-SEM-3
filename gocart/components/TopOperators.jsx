'use client'
import { busOperators } from "@/assets/busData";
import { Star, ShieldCheck, Bus, MapPin } from "lucide-react";

const TopOperators = () => {
    return (
        <section className="py-16 bg-zinc-950 border-y border-zinc-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                        Verified Partners
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
                        Top Local Transit Operators
                    </h2>
                    <p className="text-sm text-zinc-400 mt-1">
                        Trusted campus shuttles and city transit fleets committed to punctuality, clean coaches, and safe travel.
                    </p>
                </div>

                {/* Operator Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {busOperators.map((operator) => (
                        <div
                            key={operator.id}
                            className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-5 flex flex-col items-center text-center hover:border-zinc-600 hover:shadow-xl hover:shadow-black/60 transition group"
                        >
                            {/* Operator Logo Badge */}
                            <div className="size-16 rounded-2xl overflow-hidden border border-white/10 mb-3 group-hover:scale-105 transition flex items-center justify-center bg-gradient-to-tr from-zinc-800 to-zinc-950 text-white font-black text-xl shadow-md border-zinc-700">
                                <span>{operator.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                            </div>

                            {/* Name */}
                            <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition">
                                {operator.name}
                            </h3>

                            {/* Rating */}
                            <div className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 my-2">
                                <Star size={12} className="fill-emerald-400 text-emerald-400" />
                                {operator.rating} / 5
                            </div>

                            {/* Fleet Stats */}
                            <div className="w-full pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] font-semibold text-zinc-400 mt-2">
                                <span className="flex items-center gap-1">
                                    <Bus size={12} className="text-blue-400" /> {operator.totalBuses} Buses
                                </span>
                                <span className="flex items-center gap-1">
                                    <ShieldCheck size={12} className="text-emerald-400" /> Verified
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TopOperators;
