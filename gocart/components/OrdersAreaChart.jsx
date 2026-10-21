'use client'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { dummyAdminDashboardData } from '@/assets/busData';

export default function OrdersAreaChart({ allOrders = [] }) {
    let chartData = [];

    if (allOrders && allOrders.length > 0) {
        const ordersPerDay = allOrders.reduce((acc, order) => {
            const date = new Date(order.createdAt).toISOString().split('T')[0];
            acc[date] = (acc[date] || 0) + 1;
            return acc;
        }, {});

        chartData = Object.entries(ordersPerDay).map(([date, count]) => ({
            date,
            orders: count,
        }));
    } else {
        chartData = dummyAdminDashboardData.bookingsPerDay.map((d) => ({
            date: d.date,
            orders: d.bookings,
        }));
    }

    return (
        <div className="w-full max-w-4xl h-[300px] text-xs">
            <h3 className="text-sm font-bold text-slate-800 mb-4 pt-2 text-right">
                <span className="text-slate-400 font-normal">Daily Ticket Reservations /</span> Trend
            </h3>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="date" stroke="#94a3b8" />
                    <YAxis allowDecimals={false} stroke="#94a3b8" />
                    <Tooltip
                        contentStyle={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0" }}
                    />
                    <Area type="monotone" dataKey="orders" stroke="#2563eb" fill="#dbeafe" strokeWidth={2.5} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
