'use client'
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { busTrips } from "@/assets/busData";
import { setSelectedTrip, setBoardingPoint, setDroppingPoint } from "@/lib/features/booking/bookingSlice";
import SeatMap from "@/components/SeatMap";
import { ArrowLeft, Clock, MapPin, ShieldCheck, Star, Wifi, Zap, Droplet, Luggage, Ban, HelpCircle } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function TripDetailPage() {
    const { productId } = useParams();
    const router = useRouter();
    const dispatch = useDispatch();

    const selectedSeats = useSelector((state) => state.booking?.selectedSeats || []);
    const [trip, setTrip] = useState(null);
    const [selectedBoarding, setSelectedBoarding] = useState("");
    const [selectedDropping, setSelectedDropping] = useState("");

    useEffect(() => {
        const foundTrip = busTrips.find((t) => t.id === productId) || busTrips[0];
        if (foundTrip) {
            setTrip(foundTrip);
            dispatch(setSelectedTrip(foundTrip));
            if (foundTrip.boardingPoints?.length > 0) {
                const firstBp = foundTrip.boardingPoints[0];
                const bp = typeof firstBp === 'object' ? `${firstBp.name} (${firstBp.time})` : firstBp;
                setSelectedBoarding(bp);
                dispatch(setBoardingPoint(bp));
            }
            if (foundTrip.droppingPoints?.length > 0) {
                const firstDp = foundTrip.droppingPoints[0];
                const dp = typeof firstDp === 'object' ? `${firstDp.name} (${firstDp.time})` : firstDp;
                setSelectedDropping(dp);
                dispatch(setDroppingPoint(dp));
            }
        }
        window.scrollTo(0, 0);
    }, [productId, dispatch]);

    const handleProceed = () => {
        if (selectedSeats.length === 0) {
            toast.error("Please select at least one seat to proceed.");
            return;
        }
        router.push("/cart");
    };

    if (!trip) {
        return (
            <div className="min-h-screen flex items-center justify-center text-slate-500 font-semibold">
                Loading trip details...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Back Link & Breadcrumbs */}
                <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <Link href="/shop" className="hover:text-blue-600 flex items-center gap-1">
                        <ArrowLeft size={14} /> Back to Search
                    </Link>
                    <span>/</span>
                    <span>{trip.sourceCity} to {trip.destCity}</span>
                    <span>/</span>
                    <span className="text-slate-800 font-bold">{trip.operatorName}</span>
                </div>

                {/* Main Trip Card Header */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                        <div>
                            <div className="flex items-center gap-3">
                                <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                                    {trip.operatorName}
                                </h1>
                                <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                                    <Star size={13} className="fill-emerald-600 text-emerald-600" />
                                    {trip.rating} / 5
                                </span>
                            </div>
                            <p className="text-sm font-semibold text-slate-500 mt-1">{trip.busType}</p>
                        </div>

                        {/* Amenities */}
                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl">
                                <Wifi size={14} className="text-blue-600" /> Free WiFi
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl">
                                <Zap size={14} className="text-amber-500" /> AC & Charging
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl">
                                <Droplet size={14} className="text-cyan-500" /> Water Bottle
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl">
                                <ShieldCheck size={14} className="text-emerald-500" /> GPS Tracked
                            </span>
                        </div>
                    </div>

                    {/* Timeline Strip */}
                    <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                        <div className="flex items-start gap-3">
                            <div className="size-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-xl font-extrabold text-slate-800">{trip.departureTime}</p>
                                <p className="text-sm font-bold text-blue-600">{trip.sourceCity}</p>
                                <p className="text-xs text-slate-400 mt-0.5">
                                    {typeof trip.boardingPoints?.[0] === 'object' ? trip.boardingPoints[0]?.name : (trip.boardingPoints?.[0] || 'Main Boarding')}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-xs font-bold text-slate-500 flex items-center gap-1 mb-1">
                                <Clock size={13} /> {trip.duration} Journey
                            </span>
                            <div className="w-full max-w-xs h-1 bg-slate-200 rounded-full relative overflow-hidden">
                                <div className="w-1/2 h-full bg-blue-600 rounded-full" />
                            </div>
                            <span className="text-[11px] text-emerald-600 font-semibold mt-1">Confirmed On-Time</span>
                        </div>

                        <div className="flex items-start gap-3 md:justify-end text-left md:text-right">
                            <div className="order-2 md:order-1">
                                <p className="text-xl font-extrabold text-slate-800">{trip.arrivalTime}</p>
                                <p className="text-sm font-bold text-emerald-600">{trip.destCity}</p>
                                <p className="text-xs text-slate-400 mt-0.5">
                                    {typeof trip.droppingPoints?.[0] === 'object' ? trip.droppingPoints[0]?.name : (trip.droppingPoints?.[0] || 'Main Dropping')}
                                </p>
                            </div>
                            <div className="size-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 order-1 md:order-2">
                                <MapPin size={20} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Boarding & Dropping Point Pickers */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm mb-8">
                    <h3 className="text-base font-bold text-slate-800 mb-4">Select Boarding & Dropping Points</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        
                        {/* Boarding Point */}
                        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                                Boarding Stop ({trip.sourceCity})
                            </label>
                            <select
                                value={selectedBoarding}
                                onChange={(e) => {
                                    setSelectedBoarding(e.target.value);
                                    dispatch(setBoardingPoint(e.target.value));
                                }}
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-800 outline-none"
                            >
                                {trip.boardingPoints?.map((bp, i) => {
                                    const val = typeof bp === 'object' ? `${bp.name} (${bp.time})` : bp;
                                    const label = typeof bp === 'object' ? `${bp.name} — ${bp.time} (${bp.address || ''})` : bp;
                                    return (
                                        <option key={`bp_${i}`} value={val}>
                                            {label}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        {/* Dropping Point */}
                        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                                Dropping Stop ({trip.destCity})
                            </label>
                            <select
                                value={selectedDropping}
                                onChange={(e) => {
                                    setSelectedDropping(e.target.value);
                                    dispatch(setDroppingPoint(e.target.value));
                                }}
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-800 outline-none"
                            >
                                {trip.droppingPoints?.map((dp, i) => {
                                    const val = typeof dp === 'object' ? `${dp.name} (${dp.time})` : dp;
                                    const label = typeof dp === 'object' ? `${dp.name} — ${dp.time} (${dp.address || ''})` : dp;
                                    return (
                                        <option key={`dp_${i}`} value={val}>
                                            {label}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                    </div>
                </div>

                {/* Interactive Seat Map */}
                <div className="mb-10">
                    <SeatMap trip={trip} onProceed={handleProceed} />
                </div>

                {/* Policies & Travel Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-2xl border border-slate-200">
                        <div className="flex items-center gap-2 text-slate-800 font-bold text-sm mb-2">
                            <Luggage size={18} className="text-blue-600" />
                            <span>Luggage Policy</span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            Up to 2 pieces of luggage (max 20 kg) permitted per passenger. Excess luggage subject to operator charges.
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200">
                        <div className="flex items-center gap-2 text-slate-800 font-bold text-sm mb-2">
                            <Ban size={18} className="text-amber-600" />
                            <span>Cancellation Policy</span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            Full refund if cancelled 12+ hours prior to departure. 50% refund between 6 to 12 hours.
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200">
                        <div className="flex items-center gap-2 text-slate-800 font-bold text-sm mb-2">
                            <HelpCircle size={18} className="text-emerald-600" />
                            <span>Need Assistance?</span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            Contact our 24x7 helpline at 1800-200-4567 or email us at support@busgo.in with your trip ID.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
