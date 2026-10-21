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
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                
                {/* Left Section: Operator & Bus Info */}
                <div className="flex-1 min-w-[240px]">
                    <div className="flex items-center gap-3 mb-1.5">
                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition">
                            {trip.operatorName}
                        </h3>
                        <span className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
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

                {/* Center Section: Timeline & Route */}
                <div className="flex items-center justify-between lg:justify-center gap-6 sm:gap-10 border-y lg:border-y-0 lg:border-x border-slate-100 py-4 lg:py-0 lg:px-8">
                    {/* Departure */}
                    <div className="text-left">
                        <p className="text-lg font-extrabold text-slate-800">{trip.departureTime}</p>
                        <p className="text-xs font-bold text-blue-600">{trip.sourceCity}</p>
                        <p className="text-[11px] text-slate-400 truncate max-w-[120px]" title={boardingName}>
                            {boardingName}
                        </p>
                    </div>

                    {/* Duration Graphic */}
                    <div className="flex flex-col items-center">
                        <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1 mb-1">
                            <Clock size={12} /> {trip.duration}
                        </span>
                        <div className="relative w-24 sm:w-32 flex items-center">
                            <div className="size-2 rounded-full bg-blue-600" />
                            <div className="flex-1 h-0.5 bg-slate-200 border-dashed" />
                            <div className="size-2 rounded-full bg-emerald-600" />
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1">Direct</span>
                    </div>

                    {/* Arrival */}
                    <div className="text-right">
                        <p className="text-lg font-extrabold text-slate-800">{trip.arrivalTime}</p>
                        <p className="text-xs font-bold text-emerald-600">{trip.destCity}</p>
                        <p className="text-[11px] text-slate-400 truncate max-w-[120px]" title={droppingName}>
                            {droppingName}
                        </p>
                    </div>
                </div>

                {/* Right Section: Price & Action */}
                <div className="flex items-center lg:flex-col justify-between lg:justify-center items-end gap-3 min-w-[160px]">
                    <div className="text-left lg:text-right">
                        <div className="flex items-baseline gap-1.5 lg:justify-end">
                            <span className="text-2xl font-black text-slate-900">{currency}{trip.price}</span>
                            {trip.mrp && trip.mrp > trip.price && (
                                <span className="text-xs text-slate-400 line-through">{currency}{trip.mrp}</span>
                            )}
                        </div>
                        <p className="text-[11px] font-semibold text-emerald-600">
                            {trip.availableSeats} seats left
                        </p>
                    </div>

                    <Link
                        href={`/product/${trip.id}`}
                        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs rounded-xl shadow-md shadow-blue-200 transition text-center whitespace-nowrap"
                    >
                        Select Seats
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default TripCard;
