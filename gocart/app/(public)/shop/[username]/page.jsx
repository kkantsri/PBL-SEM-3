'use client'
import TripCard from "@/components/TripCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Mail, MapPin, Phone, Star, Bus, ShieldCheck } from "lucide-react";
import Loading from "@/components/Loading";
import { busOperators, busTrips } from "@/assets/busData";

export default function OperatorStorefront() {
    const { username } = useParams();
    const [operator, setOperator] = useState(null);
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const found = busOperators.find((op) => op.name.toLowerCase().replace(/\s+/g, "") === username?.toLowerCase()) || busOperators[0];
        setOperator(found);
        setTrips(busTrips.filter((t) => t.operatorId === found.id));
        setLoading(false);
    }, [username]);

    if (loading || !operator) return <Loading />;

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                
                {/* Operator Profile Header Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="size-28 rounded-3xl overflow-hidden border border-slate-200 shrink-0 flex items-center justify-center bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black text-3xl shadow-md shadow-blue-500/10">
                        <span>{operator.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">{operator.name}</h1>
                            <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                                <Star size={13} className="fill-emerald-600 text-emerald-600" />
                                {operator.rating} / 5
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-200">
                                <ShieldCheck size={14} /> Verified Partner
                            </span>
                        </div>

                        <p className="text-xs text-slate-500 mt-2 max-w-2xl leading-relaxed">
                            {operator.description}
                        </p>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 mt-4 text-xs text-slate-600 font-semibold">
                            <div className="flex items-center gap-1.5">
                                <Bus size={15} className="text-blue-600" />
                                <span>{operator.totalBuses} Luxury Coaches</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <MapPin size={15} className="text-emerald-600" />
                                <span>{operator.routesCount} Regular Corridors</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Phone size={15} className="text-amber-500" />
                                <span>{operator.contact}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Mail size={15} className="text-indigo-500" />
                                <span>{operator.email}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Operator Trips List */}
                <div className="mb-6">
                    <h2 className="text-xl font-extrabold text-slate-900">
                        Scheduled Departures by {operator.name}
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                        Showing all verified active services for this operator.
                    </p>
                </div>

                {trips.length > 0 ? (
                    <div>
                        {trips.map((trip) => (
                            <TripCard key={trip.id} trip={trip} />
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 text-xs text-slate-500">
                        No active departures found for this operator today.
                    </div>
                )}

            </div>
        </div>
    );
}
