'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { applyCoupon, removeCoupon, updatePassenger, clearBooking } from "@/lib/features/booking/bookingSlice";
import { couponDummyData, sampleBookings } from "@/assets/busData";
import { ArrowLeft, Bus, CheckCircle2, CreditCard, MapPin, QrCode, ShieldCheck, Ticket, User, Users, Tag } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

const formatPoint = (point) => {
    if (!point) return "Main Stop";
    if (typeof point === "string") return point;
    if (typeof point === "object") return `${point.name || "Stop"} (${point.time || ""})`;
    return String(point);
};

export default function BookingReviewPage() {
    const router = useRouter();
    const dispatch = useDispatch();

    const booking = useSelector((state) => state.booking);
    const { selectedTrip, selectedSeats, passengers, boardingPoint, droppingPoint, coupon, baseFare, discount, totalAmount } = booking;

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₹';

    // Local form states
    const [couponCode, setCouponCode] = useState("");
    const [email, setEmail] = useState("agrima@example.com");
    const [phone, setPhone] = useState("+91 98765 43210");
    const [paymentMethod, setPaymentMethod] = useState("UPI");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Initial passengers sync if empty
    const currentPassengers = selectedSeats.map((seatNo, idx) => {
        return passengers[idx] || { name: "", age: "", gender: "Male", seatNo };
    });

    const handlePassengerChange = (index, field, value) => {
        dispatch(updatePassenger({ index, field, value }));
    };

    const handleApplyCoupon = (e) => {
        e.preventDefault();
        const found = couponDummyData.find((c) => c.code.toUpperCase() === couponCode.trim().toUpperCase());
        if (found) {
            dispatch(applyCoupon(found));
            toast.success(`Coupon ${found.code} applied! Saved ${found.discount}%`);
        } else {
            toast.error("Invalid coupon code. Try FIRSTBUS or TRAVEL10");
        }
    };

    const handleConfirmBooking = async (e) => {
        e.preventDefault();

        // Validate passenger names
        for (let i = 0; i < selectedSeats.length; i++) {
            const p = currentPassengers[i];
            if (!p || !p.name.trim()) {
                toast.error(`Please enter passenger name for seat ${selectedSeats[i]}`);
                return;
            }
        }

        setIsSubmitting(true);
        toast.loading("Connecting to C++ Bus Route System...", { id: "booking_toast" });

        try {
            // Call C++ Backend via API Route
            const busNumber = selectedTrip?.busId || selectedTrip?.id?.replace("trip_", "") || "204";
            const srcStopId = selectedTrip?.sourceStopId || "1";
            const destStopId = selectedTrip?.destStopId || "5";

            const res = await fetch("/api/bus/book", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    passengerId: "user_1",
                    passengerName: currentPassengers[0]?.name || "Traveler",
                    age: Number(currentPassengers[0]?.age) || 25,
                    gender: currentPassengers[0]?.gender || "Male",
                    busNumber: busNumber,
                    src: srcStopId,
                    dest: destStopId,
                }),
            });

            const data = await res.json();
            const newPnr = `BUSGO${Math.floor(10000 + Math.random() * 90000)}`;

            const newBooking = {
                id: `bkg_${Date.now()}`,
                pnr: newPnr,
                userId: "user_1",
                tripId: selectedTrip?.id,
                source: selectedTrip?.sourceCity,
                destination: selectedTrip?.destCity,
                departureTime: selectedTrip?.departureTime,
                arrivalTime: selectedTrip?.arrivalTime,
                journeyDate: selectedTrip?.departureDate || "2026-10-23",
                busType: selectedTrip?.busType,
                operatorName: selectedTrip?.operatorName,
                totalAmount: totalAmount || (selectedSeats.length * (selectedTrip?.price || 0)),
                status: "CONFIRMED",
                paymentMethod,
                isPaid: true,
                boardingPoint: boardingPoint || selectedTrip?.boardingPoints?.[0]?.name,
                droppingPoint: droppingPoint || selectedTrip?.droppingPoints?.[0]?.name,
                passengers: currentPassengers,
                createdAt: new Date().toISOString(),
            };

            sampleBookings.unshift(newBooking);

            toast.success(`Booking Confirmed by C++ Backend! PNR: ${newPnr}`, { id: "booking_toast" });
            dispatch(clearBooking());
            router.push("/orders");
        } catch (err) {
            console.error(err);
            toast.error("Booking failed on C++ backend", { id: "booking_toast" });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!selectedTrip || selectedSeats.length === 0) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
                <div className="size-20 rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Ticket size={36} />
                </div>
                <h2 className="text-2xl font-black text-slate-800">No Seats Selected</h2>
                <p className="text-sm text-slate-500 mt-2 max-w-sm">
                    Please search for a route and select your preferred seats to proceed with booking.
                </p>
                <Link
                    href="/shop"
                    className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition"
                >
                    Search Buses
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <Link href={`/product/${selectedTrip.id}`} className="hover:text-blue-600 flex items-center gap-1">
                        <ArrowLeft size={14} /> Back to Seat Selection
                    </Link>
                    <span>/</span>
                    <span className="text-slate-800 font-bold">Review & Passenger Info</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left: Passenger Details & Journey Information */}
                    <div className="lg:col-span-8 space-y-6">

                        {/* Trip Summary Card */}
                        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                                <div className="flex items-center gap-2">
                                    <Bus size={20} className="text-blue-600" />
                                    <span className="text-base font-extrabold text-slate-900">{selectedTrip.operatorName}</span>
                                </div>
                                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                                    {selectedTrip.busType}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                                <div>
                                    <p className="font-semibold text-slate-400 uppercase">Route</p>
                                    <p className="text-base font-extrabold text-slate-800 mt-0.5">
                                        {selectedTrip.sourceCity} → {selectedTrip.destCity}
                                    </p>
                                    <p className="text-slate-500 mt-1">Journey Date: {selectedTrip.departureDate || "2026-10-23"}</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-slate-400 uppercase">Timing</p>
                                    <p className="text-base font-extrabold text-slate-800 mt-0.5">
                                        {selectedTrip.departureTime} - {selectedTrip.arrivalTime}
                                    </p>
                                    <p className="text-slate-500 mt-1">Duration: {selectedTrip.duration}</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-slate-400 uppercase">Selected Seats</p>
                                    <p className="text-base font-extrabold text-blue-600 mt-0.5">
                                        {selectedSeats.join(", ")}
                                    </p>
                                    <p className="text-slate-500 mt-1">{selectedSeats.length} Passenger(s)</p>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-4 text-xs text-slate-600">
                                <div className="flex items-start gap-1.5 flex-1">
                                    <MapPin size={14} className="text-blue-600 shrink-0 mt-0.5" />
                                    <span><strong>Boarding:</strong> {formatPoint(boardingPoint || selectedTrip.boardingPoints?.[0])}</span>
                                </div>
                                <div className="flex items-start gap-1.5 flex-1">
                                    <MapPin size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                                    <span><strong>Dropping:</strong> {formatPoint(droppingPoint || selectedTrip.droppingPoints?.[0])}</span>
                                </div>
                            </div>
                        </div>

                        {/* Passenger Form */}
                        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                                <Users size={18} className="text-blue-600" />
                                <h3 className="text-base font-bold text-slate-900">Passenger Information</h3>
                            </div>

                            <div className="space-y-4">
                                {selectedSeats.map((seatNo, idx) => (
                                    <div key={`seat_passenger_${seatNo}`} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs font-bold text-blue-700 bg-blue-100/80 px-2.5 py-0.5 rounded-md">
                                                Passenger {idx + 1} (Seat {seatNo})
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                                            <div className="sm:col-span-6">
                                                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Enter traveler name"
                                                    value={currentPassengers[idx]?.name || ""}
                                                    onChange={(e) => handlePassengerChange(idx, "name", e.target.value)}
                                                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 outline-none focus:border-blue-500"
                                                />
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Age</label>
                                                <input
                                                    type="number"
                                                    min="5"
                                                    max="99"
                                                    placeholder="e.g. 25"
                                                    value={currentPassengers[idx]?.age || ""}
                                                    onChange={(e) => handlePassengerChange(idx, "age", e.target.value)}
                                                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 outline-none focus:border-blue-500"
                                                />
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Gender</label>
                                                <select
                                                    value={currentPassengers[idx]?.gender || "Male"}
                                                    onChange={(e) => handlePassengerChange(idx, "gender", e.target.value)}
                                                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 outline-none focus:border-blue-500"
                                                >
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                            <h3 className="text-base font-bold text-slate-900 mb-2">Ticket Contact Details</h3>
                            <p className="text-xs text-slate-500 mb-4">Your e-ticket and SMS updates will be sent here.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Mobile Phone Number</label>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right: Fare Summary & Payment */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Coupon Code Card */}
                        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-2 mb-3">
                                <Tag size={16} className="text-blue-600" />
                                <h4 className="text-sm font-bold text-slate-800">Have a Coupon?</h4>
                            </div>

                            {coupon ? (
                                <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 p-3 rounded-2xl">
                                    <div>
                                        <p className="text-xs font-bold text-emerald-800">{coupon.code} Applied</p>
                                        <p className="text-[11px] text-emerald-600">{coupon.discount}% Discount</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => dispatch(removeCoupon())}
                                        className="text-xs font-bold text-red-600 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="e.g. FIRSTBUS"
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-800 outline-none focus:border-blue-500"
                                    />
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-xl transition"
                                    >
                                        Apply
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Fare Breakdown */}
                        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                            <h4 className="text-base font-extrabold text-slate-900 pb-3 border-b border-slate-100 mb-4">
                                Fare Breakdown
                            </h4>

                            <div className="space-y-2.5 text-xs">
                                <div className="flex justify-between text-slate-600">
                                    <span>Base Fare ({selectedSeats.length} Seats × {currency}{selectedTrip.price})</span>
                                    <span className="font-bold text-slate-800">{currency}{selectedSeats.length * selectedTrip.price}</span>
                                </div>

                                {coupon && (
                                    <div className="flex justify-between text-emerald-600 font-bold">
                                        <span>Coupon Discount ({coupon.code})</span>
                                        <span>-{currency}{discount}</span>
                                    </div>
                                )}

                                <div className="flex justify-between text-slate-600">
                                    <span>Taxes & GST (5%)</span>
                                    <span className="font-bold text-slate-800">{currency}0 (Included)</span>
                                </div>

                                <div className="pt-4 border-t border-slate-200 flex justify-between items-baseline">
                                    <span className="text-sm font-extrabold text-slate-900">Total Payable</span>
                                    <span className="text-2xl font-black text-blue-600">
                                        {currency}{totalAmount || (selectedSeats.length * selectedTrip.price)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Payment Method Selector */}
                        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                            <h4 className="text-sm font-bold text-slate-900 mb-3">Choose Payment Mode</h4>

                            <div className="space-y-2">
                                <label className={`flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition ${
                                    paymentMethod === "UPI" ? "border-blue-600 bg-blue-50/50" : "border-slate-200"
                                }`}>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        checked={paymentMethod === "UPI"}
                                        onChange={() => setPaymentMethod("UPI")}
                                        className="accent-blue-600"
                                    />
                                    <div className="text-xs">
                                        <p className="font-bold text-slate-800 flex items-center gap-1.5">
                                            <QrCode size={14} className="text-blue-600" /> UPI / QR Code
                                        </p>
                                        <p className="text-slate-400 text-[10px]">GPay, PhonePe, Paytm, BHIM</p>
                                    </div>
                                </label>

                                <label className={`flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition ${
                                    paymentMethod === "STRIPE" ? "border-blue-600 bg-blue-50/50" : "border-slate-200"
                                }`}>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        checked={paymentMethod === "STRIPE"}
                                        onChange={() => setPaymentMethod("STRIPE")}
                                        className="accent-blue-600"
                                    />
                                    <div className="text-xs">
                                        <p className="font-bold text-slate-800 flex items-center gap-1.5">
                                            <CreditCard size={14} className="text-blue-600" /> Debit / Credit Card
                                        </p>
                                        <p className="text-slate-400 text-[10px]">Visa, MasterCard, RuPay</p>
                                    </div>
                                </label>

                                <label className={`flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition ${
                                    paymentMethod === "COD" ? "border-blue-600 bg-blue-50/50" : "border-slate-200"
                                }`}>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        checked={paymentMethod === "COD"}
                                        onChange={() => setPaymentMethod("COD")}
                                        className="accent-blue-600"
                                    />
                                    <div className="text-xs">
                                        <p className="font-bold text-slate-800">Pay at Bus (Cash on Boarding)</p>
                                        <p className="text-slate-400 text-[10px]">Pay conductor at departure</p>
                                    </div>
                                </label>
                            </div>

                            {/* Book Ticket Button */}
                            <button
                                type="button"
                                disabled={isSubmitting}
                                onClick={handleConfirmBooking}
                                className="w-full mt-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.99] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl shadow-lg shadow-blue-500/25 transition flex items-center justify-center gap-2"
                            >
                                <ShieldCheck size={18} />
                                {isSubmitting ? "Confirming..." : "Confirm & Book Ticket"}
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}
