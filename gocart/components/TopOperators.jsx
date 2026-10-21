'use client'
import { busOperators } from "@/assets/busData";
import { Star, ShieldCheck, Bus, MapPin } from "lucide-react";

const TopOperators = () => {
    return (
        <section className="py-12 bg-slate-50 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        Verified Partners
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                        India&apos;s Top Bus Operators
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                        Book with trusted operators committed to punctuality, clean coaches, and safe travel.
                    </p>
                </div>

                {/* Operator Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {busOperators.map((operator) => (
                        <div
                            key={operator.id}
                            className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col items-center text-center hover:border-blue-400 hover:shadow-md transition group"
                        >
                            {/* Operator Logo Badge */}
                            <div className="size-16 rounded-2xl overflow-hidden border border-slate-100 mb-3 group-hover:scale-105 transition flex items-center justify-center bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black text-xl shadow-md shadow-blue-500/10">
                                <span>{operator.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                            </div>

                            {/* Name */}
                            <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition">
                                {operator.name}
                            </h3>

                            {/* Rating */}
                            <div className="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 my-2">
                                <Star size={12} className="fill-emerald-600 text-emerald-600" />
                                {operator.rating} / 5
                            </div>

                            {/* Fleet Stats */}
                            <div className="w-full pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500 mt-2">
                                <span className="flex items-center gap-1">
                                    <Bus size={12} className="text-blue-500" /> {operator.totalBuses} Buses
                                </span>
                                <span className="flex items-center gap-1">
                                    <MapPin size={12} className="text-emerald-500" /> {operator.routesCount} Routes
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
