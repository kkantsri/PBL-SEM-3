'use client'
import Link from "next/link";
import { Star, Clock, Wifi, Zap, Droplet, ShieldCheck, MapPin } from "lucide-react";

const TripCard = ({ trip }) => {
    if (!trip) return null;

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₹';
    const boardingName = typeof trip.boardingPoints?.[0] === 'object' ? trip.boardingPoints[0]?.name : (trip.boardingPoints?.[0] || 'Main Boarding');
    const droppingName = typeof trip.droppingPoints?.[0] === 'object' ? trip.droppingPoints[0]?.name : (trip.droppingPoints?.[0] || 'Main Dropping');

    return (
        <div className="bg-white rounded-2xl border border-slate-200/80 hover:border-blue-400 hover:shadow-lg hover:shadow-slate-100 transition-all p-5 mb-4 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-5">
                
                {/* Left Section: Operator & Bus Info (5 columns) */}
                <div className="lg:col-span-5 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition truncate">
                            {trip.operatorName}
                        </h3>
                        <span className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                            <Star size={12} className="fill-emerald-600 text-emerald-600" />
                            {trip.rating}
                        </span>
                    </div>
                    <p className="text-xs font-medium text-slate-500 mb-3">{trip.busType}</p>
                    
                    {/* Amenities pills */}
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                            <Wifi size={12} className="text-blue-500" /> WiFi
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                            <Zap size={12} className="text-amber-500" /> Charging
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                            <Droplet size={12} className="text-cyan-500" /> Water
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                            <ShieldCheck size={12} className="text-emerald-500" /> Verified
                        </span>
                    </div>
                </div>

                {/* Center Section: Timeline & Route (4 columns) */}
                <div className="lg:col-span-4 flex items-center justify-between lg:justify-center gap-4 sm:gap-6 border-y lg:border-y-0 lg:border-x border-slate-100 py-4 lg:py-1 lg:px-4 min-w-0">
                    {/* Departure */}
                    <div className="text-left min-w-[70px]">
                        <p className="text-lg font-extrabold text-slate-800">{trip.departureTime}</p>
                        <p className="text-xs font-bold text-blue-600 truncate">{trip.sourceCity}</p>
                        <p className="text-[11px] text-slate-400 truncate max-w-[100px]" title={boardingName}>
                            {boardingName}
                        </p>
                    </div>

                    {/* Duration Graphic */}
                    <div className="flex flex-col items-center shrink-0">
                        <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1 mb-1">
                            <Clock size={12} /> {trip.duration}
                        </span>
                        <div className="relative w-20 sm:w-24 flex items-center">
                            <div className="size-2 rounded-full bg-blue-600" />
                            <div className="flex-1 h-0.5 bg-slate-200 border-dashed" />
                            <div className="size-2 rounded-full bg-emerald-600" />
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1">Direct</span>
                    </div>

                    {/* Arrival */}
                    <div className="text-right min-w-[70px]">
                        <p className="text-lg font-extrabold text-slate-800">{trip.arrivalTime}</p>
                        <p className="text-xs font-bold text-emerald-600 truncate">{trip.destCity}</p>
                        <p className="text-[11px] text-slate-400 truncate max-w-[100px]" title={droppingName}>
                            {droppingName}
                        </p>
                    </div>
                </div>

                {/* Right Section: Price & Action (3 columns - locked alignment across all cards) */}
                <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100 lg:pl-3">
                    <div className="text-left lg:text-right min-w-[100px]">
                        <div className="flex items-baseline gap-1.5 lg:justify-end">
                            <span className="text-2xl font-black text-slate-900 leading-tight">
                                {currency}{trip.price}
                            </span>
                            {trip.mrp && trip.mrp > trip.price && (
                                <span className="text-xs text-slate-400 line-through">
                                    {currency}{trip.mrp}
                                </span>
                            )}
                        </div>
                        <p className="text-[11px] font-semibold text-emerald-600 mt-0.5 whitespace-nowrap">
                            {trip.availableSeats} seats left
                        </p>
                    </div>

                    <Link
                        href={`/product/${trip.id}`}
                        className="w-auto lg:w-full px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs rounded-xl shadow-md shadow-blue-500/20 transition text-center whitespace-nowrap flex items-center justify-center cursor-pointer"
                    >
                        Select Seats
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default TripCard;
