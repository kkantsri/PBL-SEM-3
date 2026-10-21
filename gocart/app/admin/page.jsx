'use client'
import { dummyAdminDashboardData } from "@/assets/busData";
import OrdersAreaChart from "@/components/OrdersAreaChart";
import { Bus, CircleDollarSign, ShieldCheck, Ticket } from "lucide-react";
import { useState } from "react";

export default function AdminDashboard() {
    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₹';

    const [data] = useState(dummyAdminDashboardData);

    const cards = [
        { title: "Total Bookings", value: data.totalBookings.toLocaleString(), icon: Ticket, color: "text-blue-600 bg-blue-50" },
        { title: "Platform Revenue", value: `${currency}${(data.totalRevenue / 100000).toFixed(1)} Lakh`, icon: CircleDollarSign, color: "text-emerald-600 bg-emerald-50" },
        { title: "Active Operators", value: data.activeOperators, icon: Bus, color: "text-amber-600 bg-amber-50" },
        { title: "Trips Scheduled Today", value: data.totalTripsToday, icon: ShieldCheck, color: "text-indigo-600 bg-indigo-50" },
    ];

    return (
        <div className="py-8 px-6 max-w-6xl mx-auto">
            <div className="mb-8">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    Platform Overview
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                    Super Admin Dashboard
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                    System-wide analytics, operator performance, and booking volumes across India.
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

            {/* Booking Volume Chart */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <h2 className="text-base font-extrabold text-slate-900 mb-4">
                    Daily Booking Trends
                </h2>
                <OrdersAreaChart allOrders={[]} />
            </div>
        </div>
    );
}
