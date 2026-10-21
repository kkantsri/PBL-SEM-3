'use client'
import { useState } from "react";
import { busTrips } from "@/assets/busData";
import { Bus, Clock, MapPin, Trash2, CheckCircle2, AlertCircle } from "lucide-react";
import toast from "react-hot-toast";

export default function StoreManageTrips() {
    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₹';
    const [trips, setTrips] = useState(busTrips);

    const handleToggleStatus = (tripId) => {
        setTrips((prev) =>
            prev.map((t) =>
                t.id === tripId
                    ? { ...t, isSuspended: !t.isSuspended }
                    : t
            )
        );
        toast.success("Trip status updated!");
    };

    const handleDeleteTrip = (tripId) => {
        if (!confirm("Are you sure you want to remove this trip schedule?")) return;
        setTrips((prev) => prev.filter((t) => t.id !== tripId));
        toast.success("Trip removed from schedule.");
    };

    return (
        <div className="py-8 px-6 max-w-6xl mx-auto">
            <div className="mb-8">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    Fleet Inventory
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                    Manage Bus Trips & Schedules
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                    Control seat availability, suspend or resume scheduled departures across all routes.
                </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-600">
                        <thead className="bg-slate-50 text-slate-400 font-bold uppercase text-[10px] border-b border-slate-200">
                            <tr>
                                <th className="p-4">Route</th>
                                <th className="p-4">Bus Type</th>
                                <th className="p-4">Timings</th>
                                <th className="p-4">Seats Left</th>
                                <th className="p-4">Fare</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-medium">
                            {trips.map((trip) => {
                                const isSuspended = trip.isSuspended || false;
                                return (
                                    <tr key={trip.id} className="hover:bg-slate-50/80 transition">
                                        <td className="p-4">
                                            <p className="font-extrabold text-slate-800 text-sm">
                                                {trip.sourceCity} → {trip.destCity}
                                            </p>
                                            <p className="text-[11px] text-slate-400 mt-0.5">{trip.operatorName}</p>
                                        </td>
                                        <td className="p-4 text-slate-700 font-semibold">{trip.busType}</td>
                                        <td className="p-4">
                                            <p className="font-bold text-slate-800">{trip.departureTime} - {trip.arrivalTime}</p>
                                            <p className="text-[11px] text-slate-400">{trip.duration}</p>
                                        </td>
                                        <td className="p-4">
                                            <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                                                {trip.availableSeats} seats
                                            </span>
                                        </td>
                                        <td className="p-4 font-black text-slate-900 text-sm">{currency}{trip.price}</td>
                                        <td className="p-4">
                                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                                                isSuspended ? "bg-amber-50 text-amber-700 border border-amber-200" : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                            }`}>
                                                {isSuspended ? "Suspended" : "Active / Open"}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right space-x-2">
                                            <button
                                                type="button"
                                                onClick={() => handleToggleStatus(trip.id)}
                                                className="px-3 py-1.5 text-[11px] font-bold rounded-lg border border-slate-200 hover:bg-slate-100 transition"
                                            >
                                                {isSuspended ? "Resume" : "Suspend"}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteTrip(trip.id)}
                                                className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                                                title="Delete Schedule"
                                            >
                                                <Trash2 size={15} />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
