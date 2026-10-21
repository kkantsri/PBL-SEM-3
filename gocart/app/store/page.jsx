'use client'
import { dummyOperatorDashboardData, sampleReviews } from "@/assets/busData";
import { Bus, CircleDollarSign, Star, Ticket, Users } from "lucide-react";
import { useState } from "react";

export default function OperatorDashboard() {
    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₹';

    const [data] = useState(dummyOperatorDashboardData);

    const cards = [
        { title: "Total Active Trips", value: data.totalTrips, icon: Bus, color: "text-blue-600 bg-blue-50" },
        { title: "Today's Bookings", value: data.todayBookings, icon: Ticket, color: "text-emerald-600 bg-emerald-50" },
        { title: "Today's Revenue", value: `${currency}${data.totalRevenue.toLocaleString()}`, icon: CircleDollarSign, color: "text-amber-600 bg-amber-50" },
        { title: "Operator Rating", value: `${data.avgRating} / 5`, icon: Star, color: "text-indigo-600 bg-indigo-50" },
    ];

    return (
        <div className="py-8 px-6 max-w-6xl mx-auto">
            <div className="mb-8">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    Fleet Management
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                    Operator Dashboard
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                    Manage active buses, monitor passenger manifests, and track live earnings.
                </p>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                {cards.map((c, i) => {
                    const Icon = c.icon;
                    return (
                        <div key={i} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center justify-between">
                            <div>
                                <p className="text-xs font-semibold text-slate-400">{c.title}</p>
                                <p className="text-2xl font-black text-slate-900 mt-1">{c.value}</p>
                            </div>
                            <div className={`size-12 rounded-2xl flex items-center justify-center ${c.color}`}>
                                <Icon size={22} />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Recent Passenger Bookings Table */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm mb-10">
                <h2 className="text-base font-extrabold text-slate-900 mb-4">
                    Recent Bookings & Manifest
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-600">
                        <thead className="bg-slate-50 text-slate-400 font-bold uppercase text-[10px] border-b border-slate-200">
                            <tr>
                                <th className="p-3">PNR</th>
                                <th className="p-3">Passenger</th>
                                <th className="p-3">Route</th>
                                <th className="p-3">Amount</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-medium">
                            {data.recentBookings.map((b, idx) => (
                                <tr key={idx} className="hover:bg-slate-50/80 transition">
                                    <td className="p-3 font-bold text-blue-600">{b.pnr}</td>
                                    <td className="p-3 font-semibold text-slate-800">{b.passenger}</td>
                                    <td className="p-3">{b.route}</td>
                                    <td className="p-3 font-bold text-slate-900">{currency}{b.amount}</td>
                                    <td className="p-3">
                                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                                            b.status === "CONFIRMED" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
                                        }`}>
                                            {b.status}
                                        </span>
                                    </td>
                                    <td className="p-3 text-slate-400">{b.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Traveler Reviews */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <h2 className="text-base font-extrabold text-slate-900 mb-4">
                    Customer Feedback & Ratings
                </h2>
                <div className="space-y-4">
                    {sampleReviews.map((r, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row justify-between gap-3">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-bold text-slate-800 text-xs">{r.userName}</span>
                                    <span className="text-[11px] text-slate-400">• {r.date}</span>
                                </div>
                                <p className="text-xs text-slate-600">{r.review}</p>
                            </div>
                            <div className="flex items-center gap-1 text-xs font-bold text-amber-500 self-start sm:self-center">
                                <Star size={14} className="fill-amber-400 text-amber-400" />
                                <span>{r.rating} / 5</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
