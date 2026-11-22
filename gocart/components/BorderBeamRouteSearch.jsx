"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { MapPin, ArrowLeftRight, Search, Calendar } from "lucide-react";
import { cities } from "@/assets/busData";
import { setSearchParams, swapCities } from "@/lib/features/search/searchSlice";
import { BorderBeam } from "@/components/ui/border-beam-search";

export default function BorderBeamRouteSearch({
  className = "",
  transparent = true,
  defaultFrom = "Clement Town",
  defaultTo = "Clock Tower",
  onSearch,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.search);

  const [from, setFrom] = useState(searchState?.from || defaultFrom);
  const [to, setTo] = useState(searchState?.to || defaultTo);

  const handleSwap = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const temp = from;
    setFrom(to);
    setTo(temp);
    dispatch(swapCities());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchParams({ from, to }));
    if (onSearch) {
      onSearch({ from, to });
    } else {
      router.push(`/shop?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`);
    }
  };

  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      <BorderBeam
        size="line"
        colorVariant="colorful"
        duration={3.1}
        borderRadius={24}
        borderWidth={1.5}
        className="w-full shadow-2xl shadow-black/80"
      >
        <form
          onSubmit={handleSearch}
          style={{
            background: transparent ? "rgba(29, 29, 29, 0.88)" : "#1d1d1d",
            boxShadow:
              "inset 0 0 0 1px rgba(44,47,54,0.52), inset 0 0 50px 0 rgba(255,255,255,0.02)",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
          className="backdrop-blur-xl rounded-[22.5px] px-3 sm:px-4 py-2.5 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-zinc-100"
        >
          {/* FROM STOP OPTION */}
          <div className="flex-1 w-full flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-black/30 hover:bg-black/50 border border-white/5 focus-within:border-blue-400/60 transition group cursor-pointer">
            <MapPin size={17} className="text-blue-400 shrink-0 group-hover:scale-110 transition" />
            <div className="flex-1 min-w-0">
              <span className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400">
                From Stop
              </span>
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full bg-transparent text-white font-semibold text-xs sm:text-sm outline-none cursor-pointer truncate [&>option]:bg-zinc-900 [&>option]:text-white"
              >
                {cities.map((city) => (
                  <option key={`bb_from_${city.id}`} value={city.name} disabled={city.name === to}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* SWAP BUTTON */}
          <button
            type="button"
            onClick={handleSwap}
            title="Swap Source and Destination"
            className="size-8 rounded-full bg-zinc-800/90 hover:bg-zinc-700 text-zinc-400 hover:text-white border border-white/10 flex items-center justify-center shrink-0 transition active:scale-95 shadow-sm"
          >
            <ArrowLeftRight size={13} />
          </button>

          {/* TO STOP OPTION */}
          <div className="flex-1 w-full flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-black/30 hover:bg-black/50 border border-white/5 focus-within:border-emerald-400/60 transition group cursor-pointer">
            <MapPin size={17} className="text-emerald-400 shrink-0 group-hover:scale-110 transition" />
            <div className="flex-1 min-w-0">
              <span className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400">
                To Stop
              </span>
              <select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full bg-transparent text-white font-semibold text-xs sm:text-sm outline-none cursor-pointer truncate [&>option]:bg-zinc-900 [&>option]:text-white"
              >
                {cities.map((city) => (
                  <option key={`bb_to_${city.id}`} value={city.name} disabled={city.name === from}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* SEARCH CTA BUTTON */}
          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition active:scale-95 shrink-0 cursor-pointer"
          >
            <Search size={15} />
            <span>Search</span>
          </button>
        </form>
      </BorderBeam>
    </div>
  );
}
