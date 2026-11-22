'use client'
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { popularRoutes } from "@/assets/busData";
import { setSearchParams } from "@/lib/features/search/searchSlice";
import { ArrowRight, Bus } from "lucide-react";

const PopularRoutes = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₹';

    const handleSelectRoute = (from, to) => {
        dispatch(setSearchParams({ from, to, date: "2026-10-23" }));
        router.push(`/shop?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=2026-10-23`);
    };

    return (
        <section className="py-16 bg-[#09090b] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                    <div>
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                            Trending Local Corridors
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
                            Popular Local Routes
                        </h2>
                        <p className="text-sm text-zinc-400 mt-1">
                            Frequent shuttles and express buses connecting Clement Town, ISBT, Clock Tower, and campus corridors.
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {popularRoutes.slice(0, 8).map((route, idx) => (
                        <div
                            key={`route_${idx}`}
                            onClick={() => handleSelectRoute(route.from, route.to)}
                            className="group bg-zinc-900/90 rounded-2xl border border-zinc-800 hover:border-zinc-600 hover:shadow-2xl hover:shadow-black/60 transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
                        >
                            {/* Card Image */}
                            <div className="h-36 w-full overflow-hidden relative bg-zinc-950">
                                <img
                                    src={route.image || "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80"}
                                    alt={`${route.from} to ${route.to}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&auto=format&fit=crop&q=80";
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                                <div className="absolute top-3 left-3 bg-zinc-900/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-white border border-white/10 flex items-center gap-1.5 shadow-sm">
                                    <Bus size={12} className="text-blue-400" />
                                    <span>Daily Local Bus</span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="font-bold text-white text-base group-hover:text-blue-400 transition flex items-center gap-1.5 flex-wrap">
                                        <span>{route.from}</span>
                                        <ArrowRight size={14} className="text-zinc-500" />
                                        <span>{route.to}</span>
                                    </h3>
                                    <p className="text-xs text-zinc-400 mt-1">
                                        {route.busesCount || 18} buses daily • Avg {route.duration || "25m"}
                                    </p>
                                </div>

                                <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-zinc-500">Starts from</p>
                                        <p className="text-base font-extrabold text-white">
                                            {currency}{route.startingFare || 30}
                                        </p>
                                    </div>
                                    <span className="text-xs font-semibold text-blue-400 group-hover:translate-x-1 transition flex items-center gap-1">
                                        Book <ArrowRight size={13} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PopularRoutes;
