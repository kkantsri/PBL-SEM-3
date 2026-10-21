'use client'
import { useState } from "react";
import { cities, busTypes, busTrips } from "@/assets/busData";
import { Bus, Calendar, Clock, MapPin, PlusCircle, ShieldCheck } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ScheduleNewTripPage() {
    const router = useRouter();
    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₹';

    const [tripInfo, setTripInfo] = useState({
        sourceCity: "Delhi",
        destCity: "Jaipur",
        departureDate: "2026-10-24",
        departureTime: "06:00 AM",
        arrivalTime: "11:30 AM",
        duration: "5h 30m",
        busType: "AC Sleeper (2+1)",
        price: 750,
        mrp: 950,
        availableSeats: 30,
        boardingStop: "Kashmere Gate ISBT",
        droppingStop: "Sindhi Camp Terminal",
    });

    const handleChange = (e) => {
        setTripInfo({ ...tripInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTrip = {
            id: `trip_${Date.now()}`,
            operatorId: "op_1",
            busId: "bus_1",
            operatorName: "Royal Travels",
            rating: 4.8,
            reviewCount: 1,
            sourceCity: tripInfo.sourceCity,
            destCity: tripInfo.destCity,
            departureDate: tripInfo.departureDate,
            departureTime: tripInfo.departureTime,
            arrivalTime: tripInfo.arrivalTime,
            duration: tripInfo.duration,
            busType: tripInfo.busType,
            price: Number(tripInfo.price),
            mrp: Number(tripInfo.mrp),
            availableSeats: Number(tripInfo.availableSeats),
            boardingPoints: [{ name: tripInfo.boardingStop, time: tripInfo.departureTime, address: tripInfo.boardingStop }],
            droppingPoints: [{ name: tripInfo.droppingStop, time: tripInfo.arrivalTime, address: tripInfo.droppingStop }],
        };

        busTrips.unshift(newTrip);
        toast.success(`Trip published successfully! Route: ${newTrip.sourceCity} → ${newTrip.destCity}`);
        router.push("/store/manage-product");
    };

    return (
        <div className="py-8 px-6 max-w-4xl mx-auto">
            <div className="mb-8">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    Route Scheduling
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                    Schedule a New Bus Trip
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                    Add upcoming schedules to the public search catalog and open seat reservations.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                
                {/* Cities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Source City (Origin)</label>
                        <select
                            name="sourceCity"
                            value={tripInfo.sourceCity}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-800 outline-none"
                        >
                            {cities.map((c) => (
                                <option key={c.id} value={c.name}>{c.name}, {c.state}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Destination City</label>
                        <select
                            name="destCity"
                            value={tripInfo.destCity}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-800 outline-none"
                        >
                            {cities.map((c) => (
                                <option key={c.id} value={c.name} disabled={c.name === tripInfo.sourceCity}>{c.name}, {c.state}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Date & Timings */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Departure Date</label>
                        <input
                            type="date"
                            name="departureDate"
                            required
                            value={tripInfo.departureDate}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-semibold text-slate-800 outline-none"
                        >
                        </input>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Departure Time</label>
                        <input
                            type="text"
                            name="departureTime"
                            required
                            placeholder="e.g. 06:00 AM"
                            value={tripInfo.departureTime}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-semibold text-slate-800 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Arrival Time</label>
                        <input
                            type="text"
                            name="arrivalTime"
                            required
                            placeholder="e.g. 11:30 AM"
                            value={tripInfo.arrivalTime}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-semibold text-slate-800 outline-none"
                        />
                    </div>
                </div>

                {/* Bus Type & Seats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Bus Category</label>
                        <select
                            name="busType"
                            value={tripInfo.busType}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-800 outline-none"
                        >
                            {busTypes.filter((t) => t !== "All").map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Base Fare ({currency})</label>
                        <input
                            type="number"
                            name="price"
                            required
                            min="100"
                            placeholder="750"
                            value={tripInfo.price}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-semibold text-slate-800 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Total Seats Available</label>
                        <input
                            type="number"
                            name="availableSeats"
                            required
                            min="1"
                            max="60"
                            value={tripInfo.availableSeats}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-semibold text-slate-800 outline-none"
                        />
                    </div>
                </div>

                {/* Stops */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Main Boarding Point</label>
                        <input
                            type="text"
                            name="boardingStop"
                            required
                            placeholder="e.g. Kashmere Gate ISBT Gate 1"
                            value={tripInfo.boardingStop}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-800 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Main Dropping Point</label>
                        <input
                            type="text"
                            name="droppingStop"
                            required
                            placeholder="e.g. Sindhi Camp Terminal"
                            value={tripInfo.droppingStop}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-800 outline-none"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition active:scale-[0.99] flex items-center justify-center gap-2"
                >
                    <PlusCircle size={18} />
                    Publish Trip Schedule
                </button>
            </form>
        </div>
    );
}
