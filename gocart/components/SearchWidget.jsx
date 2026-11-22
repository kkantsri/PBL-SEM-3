'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeftRight, Calendar, MapPin, Search } from "lucide-react";
import { cities } from "@/assets/busData";
import { setSearchParams, swapCities } from "@/lib/features/search/searchSlice";

const SearchWidget = ({ transparent = false }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const searchState = useSelector((state) => state.search);

    const [from, setFrom] = useState(searchState?.from || "Clement Town");
    const [to, setTo] = useState(searchState?.to || "Clock Tower");
    const [date, setDate] = useState(searchState?.date || "2026-10-23");

    const handleSwap = () => {
        const temp = from;
        setFrom(to);
        setTo(temp);
        dispatch(swapCities());
    };

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setSearchParams({ from, to, date }));
        router.push(`/shop?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${date}`);
    };

    return (
        <div
            className={`w-full max-w-5xl mx-auto transition-all ${
                transparent
                    ? "bg-black/45 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/90 p-3 sm:p-5 border border-white/20"
                    : "bg-zinc-900/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/80 p-4 sm:p-6 border border-zinc-800"
            }`}
        >
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-2.5 sm:gap-3.5 items-center">
                
                {/* Source Stop */}
                <div
                    className={`md:col-span-4 relative flex items-center rounded-2xl px-4 py-3 transition ${
                        transparent
                            ? "bg-black/35 border border-white/15 hover:border-white/35 focus-within:border-blue-400 focus-within:bg-black/55 backdrop-blur-md"
                            : "bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 focus-within:border-blue-400 focus-within:bg-zinc-950"
                    }`}
                >
                    <MapPin className="text-blue-400 mr-3 shrink-0" size={20} />
                    <div className="w-full">
                        <label className="block text-[10px] font-bold text-zinc-300 uppercase tracking-wider">From Stop</label>
                        <select
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            className="w-full bg-transparent text-white font-semibold text-sm sm:text-base outline-none cursor-pointer [&>option]:bg-zinc-900 [&>option]:text-white"
                        >
                            {cities.map((city) => (
                                <option key={`from_${city.id}`} value={city.name} disabled={city.name === to}>
                                    {city.name} ({city.zone || city.state})
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Swap Button */}
                <div className="md:col-span-1 flex justify-center -my-1 md:my-0">
                    <button
                        type="button"
                        onClick={handleSwap}
                        className={`size-10 rounded-full flex items-center justify-center transition shadow-sm active:scale-95 ${
                            transparent
                                ? "bg-white/15 border border-white/25 text-white hover:bg-white/25 hover:border-white/40 backdrop-blur-md"
                                : "bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-700 hover:border-zinc-500"
                        }`}
                        title="Swap stops"
                    >
                        <ArrowLeftRight size={17} />
                    </button>
                </div>

                {/* Destination Stop */}
                <div
                    className={`md:col-span-4 relative flex items-center rounded-2xl px-4 py-3 transition ${
                        transparent
                            ? "bg-black/35 border border-white/15 hover:border-white/35 focus-within:border-emerald-400 focus-within:bg-black/55 backdrop-blur-md"
                            : "bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 focus-within:border-blue-400 focus-within:bg-zinc-950"
                    }`}
                >
                    <MapPin className="text-emerald-400 mr-3 shrink-0" size={20} />
                    <div className="w-full">
                        <label className="block text-[10px] font-bold text-zinc-300 uppercase tracking-wider">To Stop</label>
                        <select
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            className="w-full bg-transparent text-white font-semibold text-sm sm:text-base outline-none cursor-pointer [&>option]:bg-zinc-900 [&>option]:text-white"
                        >
                            {cities.map((city) => (
                                <option key={`to_${city.id}`} value={city.name} disabled={city.name === from}>
                                    {city.name} ({city.zone || city.state})
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Date Picker */}
                <div
                    className={`md:col-span-3 relative flex items-center rounded-2xl px-4 py-3 transition ${
                        transparent
                            ? "bg-black/35 border border-white/15 hover:border-white/35 focus-within:border-indigo-400 focus-within:bg-black/55 backdrop-blur-md"
                            : "bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 focus-within:border-blue-400 focus-within:bg-zinc-950"
                    }`}
                >
                    <Calendar className="text-indigo-400 mr-3 shrink-0" size={20} />
                    <div className="w-full">
                        <label className="block text-[10px] font-bold text-zinc-300 uppercase tracking-wider">Date of Journey</label>
                        <input
                            type="date"
                            value={date}
                            min="2026-10-23"
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full bg-transparent text-white font-semibold text-xs sm:text-sm outline-none cursor-pointer [color-scheme:dark]"
                        />
                    </div>
                </div>

                {/* Search CTA */}
                <div className="md:col-span-12 mt-1">
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 sm:py-4 rounded-2xl transition duration-200 flex items-center justify-center gap-2 shadow-xl shadow-blue-600/40 active:scale-[0.99] cursor-pointer"
                    >
                        <Search size={19} />
                        <span className="text-sm sm:text-base tracking-wide font-extrabold">Find Available Buses & Shortest Routes</span>
                    </button>
                </div>

            </form>
        </div>
    );
};

export default SearchWidget;
