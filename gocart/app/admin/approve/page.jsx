'use client'
import { storesDummyData } from "@/assets/busData";
import StoreInfo from "@/components/admin/StoreInfo";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AdminApprove() {
    const [operators, setOperators] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchOperators = async () => {
        setOperators(storesDummyData);
        setLoading(false);
    };

    const handleApprove = (operatorId, status) => {
        setOperators((prev) =>
            prev.map((op) => (op.id === operatorId ? { ...op, status } : op))
        );
        toast.success(`Operator status updated to ${status}`);
    };

    useEffect(() => {
        fetchOperators();
    }, []);

    if (loading) return <Loading />;

    return (
        <div className="py-8 px-6 max-w-5xl mx-auto">
            <div className="mb-8">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    Operator Onboarding
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                    Review & Approve Bus Operators
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                    Verify compliance, permit details, and activate operator accounts for ticket sales.
                </p>
            </div>

            {operators.length ? (
                <div className="flex flex-col gap-4">
                    {operators.map((op) => (
                        <div key={op.id} className="bg-white border border-slate-200 rounded-3xl shadow-xs p-6 flex max-md:flex-col gap-4 md:items-end justify-between">
                            <StoreInfo store={op} />

                            <div className="flex gap-2 pt-2 shrink-0">
                                <button
                                    onClick={() => handleApprove(op.id, 'approved')}
                                    className="px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 text-xs font-bold transition shadow-sm"
                                >
                                    Approve Fleet
                                </button>
                                <button
                                    onClick={() => handleApprove(op.id, 'rejected')}
                                    className="px-4 py-2 bg-slate-200 text-slate-700 rounded-xl hover:bg-slate-300 text-xs font-bold transition"
                                >
                                    Reject
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-sm text-slate-500">No pending operator applications.</p>
            )}
        </div>
    );
}
