'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeftRight, Calendar, MapPin, Search } from "lucide-react";
import { cities } from "@/assets/busData";
import { setSearchParams, swapCities } from "@/lib/features/search/searchSlice";

const SearchWidget = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const searchState = useSelector((state) => state.search);

    const [from, setFrom] = useState(searchState?.from || "Delhi");
    const [to, setTo] = useState(searchState?.to || "Jaipur");
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
        <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/60 p-4 sm:p-6 border border-slate-100">
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
                
                {/* Source City */}
                <div className="md:col-span-4 relative flex items-center bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 hover:border-blue-400 focus-within:border-blue-500 focus-within:bg-white transition">
                    <MapPin className="text-blue-600 mr-3 shrink-0" size={22} />
                    <div className="w-full">
                        <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">From City</label>
                        <select
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            className="w-full bg-transparent text-slate-800 font-semibold text-base outline-none cursor-pointer"
                        >
                            {cities.map((city) => (
                                <option key={`from_${city.id}`} value={city.name} disabled={city.name === to}>
                                    {city.name}, {city.state}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Swap Button */}
                <div className="md:col-span-1 flex justify-center -my-2 md:my-0">
                    <button
                        type="button"
                        onClick={handleSwap}
                        className="size-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 hover:border-blue-400 transition shadow-sm active:scale-95"
                        title="Swap cities"
                    >
                        <ArrowLeftRight size={18} />
                    </button>
                </div>

                {/* Destination City */}
                <div className="md:col-span-4 relative flex items-center bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 hover:border-blue-400 focus-within:border-blue-500 focus-within:bg-white transition">
                    <MapPin className="text-emerald-600 mr-3 shrink-0" size={22} />
                    <div className="w-full">
                        <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">To City</label>
                        <select
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            className="w-full bg-transparent text-slate-800 font-semibold text-base outline-none cursor-pointer"
                        >
                            {cities.map((city) => (
                                <option key={`to_${city.id}`} value={city.name} disabled={city.name === from}>
                                    {city.name}, {city.state}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Date Picker */}
                <div className="md:col-span-3 relative flex items-center bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 hover:border-blue-400 focus-within:border-blue-500 focus-within:bg-white transition">
                    <Calendar className="text-amber-500 mr-3 shrink-0" size={22} />
                    <div className="w-full">
                        <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Journey Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full bg-transparent text-slate-800 font-semibold text-sm outline-none cursor-pointer"
                            required
                        />
                    </div>
                </div>

                {/* Search CTA Button */}
                <div className="md:col-span-12 mt-2">
                    <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-base rounded-2xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2.5 transition active:scale-[0.99]"
                    >
                        <Search size={20} />
                        Search Available Buses
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchWidget;
