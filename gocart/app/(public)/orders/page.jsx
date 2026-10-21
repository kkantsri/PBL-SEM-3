'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { sampleBookings } from "@/assets/busData";
import { Bus, Calendar, Clock, Download, MapPin, Printer, QrCode, ShieldCheck, Ticket, Users, XCircle } from "lucide-react";
import toast from "react-hot-toast";

const formatPoint = (point) => {
    if (!point) return "Main Stop";
    if (typeof point === "string") return point;
    if (typeof point === "object") return `${point.name || "Stop"} (${point.time || ""})`;
    return String(point);
};

export default function MyBookingsPage() {
    const [bookings, setBookings] = useState([]);
    const [selectedTicketForPrint, setSelectedTicketForPrint] = useState(null);

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₹';

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const res = await fetch("/api/bus/bookings");
                const data = await res.json();
                if (data.success && data.bookings) {
                    const cppList = data.bookings.map((cb) => ({
                        id: cb.bookingId,
                        pnr: cb.bookingId,
                        userId: cb.passengerId,
                        source: cb.sourceName || "ISBT Dehradun",
                        destination: cb.destinationName || "Sahastradhara",
                        departureTime: "07:00 AM",
                        arrivalTime: "08:15 AM",
                        journeyDate: "2026-10-23",
                        busType: `Hill View (${cb.busNumber})`,
                        operatorName: "Doon Transport Corp",
                        totalAmount: cb.fare,
                        status: "CONFIRMED",
                        paymentMethod: "UPI",
                        boardingPoint: cb.sourceName || "ISBT Dehradun",
                        droppingPoint: cb.destinationName || "Sahastradhara",
                        passengers: [{ name: "Traveler", age: 24, gender: "Adult", seatNo: "Allocated" }],
                        createdAt: new Date().toISOString(),
                    }));
                    setBookings([...sampleBookings, ...cppList]);
                } else {
                    setBookings([...sampleBookings]);
                }
            } catch (e) {
                setBookings([...sampleBookings]);
            }
        };
        fetchBookings();
    }, []);

    const handleCancelBooking = async (bookingId) => {
        if (!confirm("Are you sure you want to cancel this booking?")) return;

        try {
            await fetch("/api/bus/cancel", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ bookingId }),
            });
            setBookings((prev) =>
                prev.map((b) => (b.id === bookingId ? { ...b, status: "CANCELLED" } : b))
            );
            toast.success("Booking cancelled in C++ backend! Seat released.");
        } catch (err) {
            setBookings((prev) =>
                prev.map((b) => (b.id === bookingId ? { ...b, status: "CANCELLED" } : b))
            );
            toast.success("Booking cancelled successfully.");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-slate-200 mb-8 gap-4">
                    <div>
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                            Travel Dashboard
                        </span>
                        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                            My Bookings & E-Tickets
                        </h1>
                        <p className="text-xs text-slate-500 mt-1">
                            View upcoming journeys, download printable e-tickets, and manage cancellations.
                        </p>
                    </div>

                    <Link
                        href="/shop"
                        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition self-start sm:self-auto"
                    >
                        + Book Another Trip
                    </Link>
                </div>

                {/* Booking Cards List */}
                {bookings.length > 0 ? (
                    <div className="space-y-6">
                        {bookings.map((booking) => {
                            const isConfirmed = booking.status === "CONFIRMED";

                            return (
                                <div
                                    key={booking.id}
                                    className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:border-blue-400 transition"
                                >
                                    {/* Card Top: PNR & Status */}
                                    <div className="flex flex-wrap items-center justify-between pb-5 border-b border-slate-100 gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                                                <Ticket size={20} />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs text-slate-400 font-semibold uppercase">PNR:</span>
                                                    <span className="text-base font-black text-slate-900 tracking-wider">
                                                        {booking.pnr}
                                                    </span>
                                                </div>
                                                <p className="text-[11px] text-slate-400">
                                                    Booked on {new Date(booking.createdAt).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                                                    isConfirmed
                                                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                                        : "bg-red-50 text-red-700 border border-red-200"
                                                }`}
                                            >
                                                {booking.status}
                                            </span>

                                            <button
                                                type="button"
                                                onClick={() => setSelectedTicketForPrint(booking)}
                                                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition"
                                            >
                                                <Printer size={14} /> Print Ticket
                                            </button>

                                            {isConfirmed && (
                                                <button
                                                    type="button"
                                                    onClick={() => handleCancelBooking(booking.id)}
                                                    className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-xl transition"
                                                >
                                                    <XCircle size={14} /> Cancel
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Card Center: Route and Details */}
                                    <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                                        
                                        {/* Route & Times */}
                                        <div className="md:col-span-5">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Bus size={18} className="text-blue-600" />
                                                <span className="text-base font-extrabold text-slate-800">
                                                    {booking.operatorName}
                                                </span>
                                                <span className="text-xs text-slate-400">({booking.busType})</span>
                                            </div>

                                            <div className="flex items-center gap-4 text-sm font-extrabold text-slate-800 mt-3">
                                                <div>
                                                    <p className="text-lg font-black text-slate-900">{booking.departureTime}</p>
                                                    <p className="text-xs font-bold text-blue-600">{booking.source}</p>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <div className="w-16 h-0.5 bg-slate-300 relative">
                                                        <div className="size-2 rounded-full bg-blue-600 absolute -top-[3px] left-0" />
                                                        <div className="size-2 rounded-full bg-emerald-600 absolute -top-[3px] right-0" />
                                                    </div>
                                                    <span className="text-[10px] text-slate-400 font-semibold mt-1">Direct</span>
                                                </div>
                                                <div>
                                                    <p className="text-lg font-black text-slate-900">{booking.arrivalTime}</p>
                                                    <p className="text-xs font-bold text-emerald-600">{booking.destination}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Boarding Info */}
                                        <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6 text-xs text-slate-600 space-y-1.5">
                                            <p className="flex items-center gap-1.5 font-bold text-slate-800">
                                                <Calendar size={14} className="text-amber-500" />
                                                <span>Journey Date: {booking.journeyDate}</span>
                                            </p>
                                            <p className="flex items-start gap-1.5">
                                                <MapPin size={14} className="text-blue-600 shrink-0 mt-0.5" />
                                                <span><strong>Boarding:</strong> {formatPoint(booking.boardingPoint)}</span>
                                            </p>
                                            <p className="flex items-start gap-1.5">
                                                <MapPin size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                                                <span><strong>Dropping:</strong> {formatPoint(booking.droppingPoint)}</span>
                                            </p>
                                        </div>

                                        {/* Fare & Passengers */}
                                        <div className="md:col-span-3 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6 flex flex-col justify-between items-start md:items-end">
                                            <div>
                                                <p className="text-[11px] font-semibold text-slate-400">Total Fare Paid</p>
                                                <p className="text-2xl font-black text-blue-600">{currency}{booking.totalAmount}</p>
                                            </div>

                                            <div className="mt-2 text-xs font-semibold text-slate-600 flex items-center gap-1">
                                                <Users size={14} className="text-slate-400" />
                                                <span>{booking.passengers?.length || 1} Passenger(s)</span>
                                            </div>
                                        </div>

                                    </div>

                                    {/* Passengers breakdown */}
                                    <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 items-center">
                                        <span className="text-xs font-bold text-slate-400 mr-2">Passengers:</span>
                                        {booking.passengers?.map((p, idx) => (
                                            <span
                                                key={`ps_${idx}`}
                                                className="inline-flex items-center gap-1.5 text-xs font-medium bg-slate-50 border border-slate-200 px-3 py-1 rounded-xl text-slate-700"
                                            >
                                                <strong>Seat {p.seatNo}:</strong> {p.name} ({p.gender}, {p.age}y)
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="bg-white rounded-3xl p-16 text-center border border-slate-200">
                        <div className="size-20 rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
                            <Ticket size={36} />
                        </div>
                        <h2 className="text-2xl font-extrabold text-slate-900">No Bookings Yet</h2>
                        <p className="text-xs text-slate-500 mt-2 max-w-sm mx-auto">
                            You haven&apos;t booked any bus journeys yet. Explore our top routes and book your first trip today!
                        </p>
                        <Link
                            href="/shop"
                            className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition"
                        >
                            Explore Buses
                        </Link>
                    </div>
                )}

            </div>

            {/* Printable Ticket Modal */}
            {selectedTicketForPrint && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative">
                        <button
                            type="button"
                            onClick={() => setSelectedTicketForPrint(null)}
                            className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 text-sm font-bold"
                        >
                            ✕
                        </button>

                        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                            <div className="flex items-center gap-2">
                                <Bus size={24} className="text-blue-600" />
                                <span className="text-xl font-black text-slate-900">BusGo E-Ticket</span>
                            </div>
                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                PNR: {selectedTicketForPrint.pnr}
                            </span>
                        </div>

                        <div className="my-6 space-y-4 text-xs text-slate-700">
                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                                <p className="font-extrabold text-sm text-slate-800 mb-1">{selectedTicketForPrint.operatorName}</p>
                                <p className="text-slate-500">{selectedTicketForPrint.busType}</p>
                                <div className="mt-3 flex justify-between font-bold">
                                    <span>{selectedTicketForPrint.source} ({selectedTicketForPrint.departureTime})</span>
                                    <span>→</span>
                                    <span>{selectedTicketForPrint.destination} ({selectedTicketForPrint.arrivalTime})</span>
                                </div>
                                <p className="text-slate-500 mt-1">Journey Date: {selectedTicketForPrint.journeyDate}</p>
                            </div>

                            <div className="border border-slate-200 p-4 rounded-2xl">
                                <p className="font-bold text-slate-800 mb-2">Passengers & Seat Allotment</p>
                                {selectedTicketForPrint.passengers?.map((p, i) => (
                                    <div key={i} className="flex justify-between py-1 border-b border-slate-100 last:border-0">
                                        <span>{p.name} ({p.gender}, {p.age})</span>
                                        <span className="font-bold text-blue-600">Seat: {p.seatNo}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-2xl border border-emerald-200 font-bold">
                                <span>Total Fare Paid</span>
                                <span className="text-base text-emerald-800">{currency}{selectedTicketForPrint.totalAmount}</span>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={() => {
                                    window.print();
                                }}
                                className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2"
                            >
                                <Printer size={16} /> Print / Save PDF
                            </button>
                            <button
                                type="button"
                                onClick={() => setSelectedTicketForPrint(null)}
                                className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
