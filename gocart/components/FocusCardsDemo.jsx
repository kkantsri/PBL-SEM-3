"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSearchParams } from "@/lib/features/search/searchSlice";
import { FocusCards } from "@/components/ui/focus-cards";
import { Compass, Sparkles, MapPin, Trees } from "lucide-react";

export function FocusCardsDemo() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("local"); // "local" | "outer"

  const handleSelectRoute = (from, to) => {
    dispatch(setSearchParams({ from, to, date: "2026-10-23" }));
    router.push(`/shop?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=2026-10-23`);
  };

  // Local routes (merged into this section)
  const localRouteCards = [
    {
      title: "Clement Town ➔ Clock Tower",
      subtitle: "45 daily shuttles • Avg 25m",
      fare: "₹35",
      badge: "Local Transit",
      src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&auto=format&fit=crop&q=80",
      onClick: () => handleSelectRoute("Clement Town", "Clock Tower"),
    },
    {
      title: "ISBT Dehradun ➔ Sahastradhara",
      subtitle: "38 daily shuttles • Avg 35m",
      fare: "₹50",
      badge: "Local Express",
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
      onClick: () => handleSelectRoute("ISBT Dehradun", "Sahastradhara"),
    },
    {
      title: "Clock Tower ➔ Rajpur Road",
      subtitle: "55 daily shuttles • Avg 15m",
      fare: "₹25",
      badge: "City Corridor",
      src: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&auto=format&fit=crop&q=80",
      onClick: () => handleSelectRoute("Clock Tower", "Rajpur Road"),
    },
    {
      title: "Clement Town ➔ Prem Nagar",
      subtitle: "32 daily shuttles • Avg 40m",
      fare: "₹45",
      badge: "Campus Line",
      src: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&auto=format&fit=crop&q=80",
      onClick: () => handleSelectRoute("Clement Town", "Prem Nagar"),
    },
    {
      title: "Clock Tower ➔ Robber's Cave",
      subtitle: "28 daily shuttles • Avg 30m",
      fare: "₹40",
      badge: "Scenic Local",
      src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&auto=format&fit=crop&q=80",
      onClick: () => handleSelectRoute("Clock Tower", "Robber's Cave"),
    },
    {
      title: "ISBT Dehradun ➔ Clock Tower",
      subtitle: "50 daily shuttles • Avg 20m",
      fare: "₹30",
      badge: "Metro Shuttle",
      src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      onClick: () => handleSelectRoute("ISBT Dehradun", "Clock Tower"),
    },
  ];

  // Outer Getaways & Trails
  const outerGetawayCards = [
    {
      title: "Forest Adventure",
      subtitle: "Scenic forest trails & nature reserve route",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Valley of life",
      subtitle: "Valley viewpoints and winding mountain paths",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sala behta hi jayega",
      subtitle: "Riverside crossings & white-water corridors",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Camping is for pros",
      subtitle: "Alpine retreats and pine forest ridge camping",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The road not taken",
      subtitle: "Remote mountain passes and high-altitude highway",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The First Rule",
      subtitle: "Essential passenger safety & verified transit guidance",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ];

  const currentCards = activeTab === "local" ? localRouteCards : outerGetawayCards;

  return (
    <section className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-zinc-200 px-4 py-1.5 rounded-full text-xs font-semibold border border-white/15 mb-4 shadow-sm">
            <Sparkles size={14} className="text-blue-400" />
            <span>Smart Corridors & Escapes</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {activeTab === "local" ? "Popular Local Routes" : "Explore Beyond The City Limits"}
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            {activeTab === "local"
              ? "High-frequency local shuttles connecting Clement Town, ISBT, Clock Tower, and campus corridors."
              : "Scenic valley routes and wilderness expeditions reachable via BusGo's outer transit lines."}
          </p>

          {/* Tab Switcher: Local Routes vs Outer Getaways */}
          <div className="inline-flex items-center p-1.5 bg-black/60 backdrop-blur-md rounded-2xl border border-white/20 mt-7 shadow-lg">
            <button
              onClick={() => setActiveTab("local")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "local"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/40"
                  : "text-zinc-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <MapPin size={15} />
              <span>Local Routes</span>
            </button>
            <button
              onClick={() => setActiveTab("outer")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "outer"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/40"
                  : "text-zinc-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Trees size={15} />
              <span>Outer Getaways</span>
            </button>
          </div>
        </div>

        {/* Unified Focus Cards Grid */}
        <FocusCards cards={currentCards} />

      </div>
    </section>
  );
}

export default FocusCardsDemo;
