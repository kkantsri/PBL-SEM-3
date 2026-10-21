'use client'
import { Suspense, useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { busTrips, busOperators, busTypes, cities } from "@/assets/busData";
import TripCard from "@/components/TripCard";
import { ArrowLeftRight, Calendar, Filter, MapPin, SlidersHorizontal, Star, X } from "lucide-react";

function SearchContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const paramFrom = searchParams.get("from") || "Delhi";
    const paramTo = searchParams.get("to") || "Jaipur";
    const paramDate = searchParams.get("date") || "2026-10-23";

    // Filter states
    const [selectedBusType, setSelectedBusType] = useState("All");
    const [selectedOperator, setSelectedOperator] = useState("All");
    const [maxPrice, setMaxPrice] = useState(3000);
    const [minRating, setMinRating] = useState(0);
    const [sortBy, setSortBy] = useState("price_asc");
    const [showMobileFilter, setShowMobileFilter] = useState(false);

    // Filter logic
    const filteredTrips = useMemo(() => {
        let trips = busTrips.filter((t) => {
            const matchesFrom = !paramFrom || t.sourceCity.toLowerCase() === paramFrom.toLowerCase();
            const matchesTo = !paramTo || t.destCity.toLowerCase() === paramTo.toLowerCase();
            const matchesType = selectedBusType === "All" || t.busType.toLowerCase().includes(selectedBusType.toLowerCase());
            const matchesOperator = selectedOperator === "All" || t.operatorName.toLowerCase() === selectedOperator.toLowerCase();
            const matchesPrice = t.price <= maxPrice;
            const matchesRating = t.rating >= minRating;
            return matchesFrom && matchesTo && matchesType && matchesOperator && matchesPrice && matchesRating;
        });

        // Sorting
        if (sortBy === "price_asc") trips.sort((a, b) => a.price - b.price);
        else if (sortBy === "price_desc") trips.sort((a, b) => b.price - a.price);
        else if (sortBy === "rating_desc") trips.sort((a, b) => b.rating - a.rating);

        return trips;
    }, [paramFrom, paramTo, selectedBusType, selectedOperator, maxPrice, minRating, sortBy]);

    const handleClearFilters = () => {
        setSelectedBusType("All");
        setSelectedOperator("All");
        setMaxPrice(3000);
        setMinRating(0);
        setSortBy("price_asc");
    };

    return (
        <div className="min-h-screen bg-slate-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Search Bar / Header Strip */}
                <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="size-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                            <MapPin size={22} />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 text-lg sm:text-xl font-extrabold text-slate-800">
                                <span>{paramFrom}</span>
                                <ArrowLeftRight size={18} className="text-slate-400" />
                                <span>{paramTo}</span>
                            </div>
                            <p className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mt-0.5">
                                <Calendar size={13} />
                                <span>Date: {paramDate}</span>
                                <span>•</span>
                                <span className="text-blue-600 font-bold">{filteredTrips.length} Buses Available</span>
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => router.push("/")}
                        className="text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl transition"
                    >
                        Change Route
                    </button>
                </div>

                {/* Main Content: Sidebar + Trip Results */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    
                    {/* Left: Filter Sidebar (Desktop) */}
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="bg-white rounded-3xl p-6 border border-slate-200 sticky top-24 shadow-sm">
                            
                            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                                <div className="flex items-center gap-2 text-sm font-extrabold text-slate-800">
                                    <SlidersHorizontal size={18} className="text-blue-600" />
                                    <span>Filter Buses</span>
                                </div>
                                <button
                                    onClick={handleClearFilters}
                                    className="text-xs font-bold text-slate-400 hover:text-blue-600 transition"
                                >
                                    Reset
                                </button>
                            </div>

                            {/* Bus Type */}
                            <div className="mb-6">
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                                    Bus Category
                                </label>
                                <div className="space-y-1.5">
                                    {["All", "AC Sleeper", "AC Seater", "Semi Sleeper"].map((type) => (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() => setSelectedBusType(type)}
                                            className={`w-full text-left px-3 py-2 text-xs rounded-xl font-semibold transition ${
                                                selectedBusType === type
                                                    ? "bg-blue-600 text-white shadow-xs"
                                                    : "text-slate-600 hover:bg-slate-100"
                                            }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Operators */}
                            <div className="mb-6">
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                                    Bus Operator
                                </label>
                                <select
                                    value={selectedOperator}
                                    onChange={(e) => setSelectedOperator(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-semibold text-slate-700 outline-none"
                                >
                                    <option value="All">All Operators</option>
                                    {busOperators.map((op) => (
                                        <option key={op.id} value={op.name}>
                                            {op.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Max Price Slider */}
                            <div className="mb-6">
                                <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                    <span>Max Fare</span>
                                    <span className="text-blue-600 font-extrabold">₹{maxPrice}</span>
                                </div>
                                <input
                                    type="range"
                                    min="400"
                                    max="3000"
                                    step="50"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                                    className="w-full accent-blue-600 cursor-pointer"
                                />
                                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                                    <span>₹400</span>
                                    <span>₹3000</span>
                                </div>
                            </div>

                            {/* Star Rating */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                                    Minimum Rating
                                </label>
                                <div className="flex items-center gap-2">
                                    {[0, 4.0, 4.5].map((rate) => (
                                        <button
                                            key={rate}
                                            type="button"
                                            onClick={() => setMinRating(rate)}
                                            className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition ${
                                                minRating === rate
                                                    ? "bg-blue-600 text-white border-blue-600"
                                                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                                            }`}
                                        >
                                            {rate === 0 ? "Any" : `${rate}★+`}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right: Results List */}
                    <div className="lg:col-span-3">
                        
                        {/* Sort Strip */}
                        <div className="bg-white rounded-2xl p-3 border border-slate-200 mb-5 flex flex-wrap items-center justify-between gap-3 text-xs">
                            <span className="font-bold text-slate-500">
                                Sorted by:
                            </span>

                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => setSortBy("price_asc")}
                                    className={`px-3 py-1.5 rounded-lg font-bold transition ${
                                        sortBy === "price_asc"
                                            ? "bg-blue-600 text-white"
                                            : "text-slate-600 hover:bg-slate-100"
                                    }`}
                                >
                                    Cheapest
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSortBy("price_desc")}
                                    className={`px-3 py-1.5 rounded-lg font-bold transition ${
                                        sortBy === "price_desc"
                                            ? "bg-blue-600 text-white"
                                            : "text-slate-600 hover:bg-slate-100"
                                    }`}
                                >
                                    Price (High to Low)
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSortBy("rating_desc")}
                                    className={`px-3 py-1.5 rounded-lg font-bold transition ${
                                        sortBy === "rating_desc"
                                            ? "bg-blue-600 text-white"
                                            : "text-slate-600 hover:bg-slate-100"
                                    }`}
                                >
                                    Top Rated
                                </button>
                            </div>
                        </div>

                        {/* Trip Cards */}
                        {filteredTrips.length > 0 ? (
                            <div>
                                {filteredTrips.map((trip) => (
                                    <TripCard key={trip.id} trip={trip} />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                                <div className="size-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                                    <Filter size={28} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-800">No buses match your criteria</h3>
                                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                                    Try adjusting your price range, bus category, or searching for a different date or city pair.
                                </p>
                                <button
                                    onClick={handleClearFilters}
                                    className="mt-5 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm transition"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}

                    </div>

                </div>

            </div>
        </div>
    );
}

export default function Shop() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading bus schedules...</div>}>
            <SearchContent />
        </Suspense>
    );
}
