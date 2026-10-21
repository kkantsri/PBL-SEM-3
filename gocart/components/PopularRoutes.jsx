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
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                    <div>
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                            Trending Destinations
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                            Popular Bus Routes
                        </h2>
                        <p className="text-sm text-slate-500 mt-1">
                            Daily buses connecting major cities across India at the best fares.
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {popularRoutes.slice(0, 8).map((route, idx) => (
                        <div
                            key={`route_${idx}`}
                            onClick={() => handleSelectRoute(route.from, route.to)}
                            className="group bg-white rounded-2xl border border-slate-200/90 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
                        >
                            {/* Card Image */}
                            <div className="h-36 w-full overflow-hidden relative bg-slate-100">
                                <img
                                    src={route.image}
                                    alt={`${route.from} to ${route.to}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white font-bold text-sm">
                                    <Bus size={16} />
                                    <span>{route.trips} Buses Daily</span>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="p-4">
                                <div className="flex items-center justify-between text-base font-bold text-slate-800 group-hover:text-blue-600 transition mb-2">
                                    <span>{route.from}</span>
                                    <ArrowRight size={16} className="text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition" />
                                    <span>{route.to}</span>
                                </div>

                                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                                    <span className="text-xs text-slate-400 font-medium">Starts from</span>
                                    <span className="text-base font-extrabold text-slate-900">
                                        {currency}{route.startingPrice}
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
