'use client'
import { useState, useEffect } from "react";
import { sampleBookings } from "@/assets/busData";
import { Ticket, User, MapPin, CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";

const formatPoint = (point) => {
    if (!point) return "Main Stop";
    if (typeof point === "string") return point;
    if (typeof point === "object") return `${point.name || "Stop"} (${point.time || ""})`;
    return String(point);
};

export default function OperatorBookingsPage() {
    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₹';
    const [bookings, setBookings] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(null);

    useEffect(() => {
        setBookings([...sampleBookings]);
    }, []);

    const handleUpdateStatus = (bookingId, newStatus) => {
        setBookings((prev) =>
            prev.map((b) => (b.id === bookingId ? { ...b, status: newStatus } : b))
        );
        toast.success(`Booking status changed to ${newStatus}`);
    };

    return (
        <div className="py-8 px-6 max-w-6xl mx-auto">
            <div className="mb-8">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    Manifest Control
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                    Passenger Manifest & Bookings
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                    Verify boarding status, view allocated seats, and manage passenger lists.
                </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-600">
                        <thead className="bg-slate-50 text-slate-400 font-bold uppercase text-[10px] border-b border-slate-200">
                            <tr>
                                <th className="p-4">PNR</th>
                                <th className="p-4">Passengers</th>
                                <th className="p-4">Route & Date</th>
                                <th className="p-4">Boarding Stop</th>
                                <th className="p-4">Amount</th>
                                <th className="p-4">Boarding Status</th>
                                <th className="p-4 text-right">Details</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-medium">
                            {bookings.map((b) => (
                                <tr key={b.id} className="hover:bg-slate-50/80 transition">
                                    <td className="p-4 font-black text-blue-600">{b.pnr}</td>
                                    <td className="p-4">
                                        <p className="font-extrabold text-slate-800 text-sm">
                                            {b.passengers?.[0]?.name || "Passenger"}
                                        </p>
                                        <p className="text-[11px] text-slate-400">
                                            Seat: {b.passengers?.map((p) => p.seatNo).join(", ")}
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <p className="font-bold text-slate-800">{b.source} → {b.destination}</p>
                                        <p className="text-[11px] text-slate-400">{b.journeyDate} • {b.departureTime}</p>
                                    </td>
                                    <td className="p-4 text-slate-600 max-w-xs truncate" title={formatPoint(b.boardingPoint)}>
                                        {formatPoint(b.boardingPoint)}
                                    </td>
                                    <td className="p-4 font-black text-slate-900">{currency}{b.totalAmount}</td>
                                    <td className="p-4">
                                        <select
                                            value={b.status}
                                            onChange={(e) => handleUpdateStatus(b.id, e.target.value)}
                                            className="bg-slate-50 border border-slate-200 rounded-lg p-1.5 text-xs font-bold text-slate-700 outline-none"
                                        >
                                            <option value="CONFIRMED">CONFIRMED</option>
                                            <option value="BOARDED">BOARDED</option>
                                            <option value="NO_SHOW">NO_SHOW</option>
                                            <option value="CANCELLED">CANCELLED</option>
                                        </select>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button
                                            type="button"
                                            onClick={() => setSelectedBooking(b)}
                                            className="text-xs font-bold text-blue-600 hover:underline"
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {selectedBooking && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-xs">
                        <button
                            type="button"
                            onClick={() => setSelectedBooking(null)}
                            className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 font-bold"
                        >
                            ✕
                        </button>

                        <h3 className="text-base font-extrabold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                            Booking Manifest: PNR {selectedBooking.pnr}
                        </h3>

                        <div className="space-y-3">
                            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                                <p className="font-bold text-slate-800">{selectedBooking.source} → {selectedBooking.destination}</p>
                                <p className="text-slate-500">{selectedBooking.journeyDate} at {selectedBooking.departureTime}</p>
                                <p className="text-slate-500 mt-1">Boarding: {formatPoint(selectedBooking.boardingPoint)}</p>
                            </div>

                            <div className="border border-slate-200 p-3.5 rounded-2xl">
                                <p className="font-bold text-slate-800 mb-2">Manifest Traveler List</p>
                                {selectedBooking.passengers?.map((p, i) => (
                                    <div key={i} className="flex justify-between py-1 border-b border-slate-100 last:border-0">
                                        <span>{p.name} ({p.gender}, {p.age}y)</span>
                                        <span className="font-bold text-blue-600">Seat {p.seatNo}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between p-3.5 bg-blue-50 rounded-2xl text-blue-900 font-bold">
                                <span>Fare Collected ({selectedBooking.paymentMethod})</span>
                                <span>{currency}{selectedBooking.totalAmount}</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setSelectedBooking(null)}
                            className="w-full mt-6 py-2.5 bg-slate-800 text-white font-bold rounded-xl"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
