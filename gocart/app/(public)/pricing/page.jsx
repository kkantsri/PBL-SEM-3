'use client'
import { couponDummyData } from "@/assets/busData";
import { Copy, Sparkles, Tag, Check } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function OffersPage() {
    const [copiedCode, setCopiedCode] = useState("");

    const handleCopy = (code) => {
        setCopiedCode(code);
        toast.success(`Coupon ${code} copied to clipboard!`);
        if (typeof navigator !== "undefined" && navigator.clipboard) {
            navigator.clipboard.writeText(code);
        }
        setTimeout(() => setCopiedCode(""), 2500);
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
                
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                        Savings & Perks
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
                        BusGo Travel Offers & Coupons
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Apply these discount vouchers during checkout to save big on your bus tickets.
                    </p>
                </div>

                {/* Coupons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {couponDummyData.map((coupon) => (
                        <div
                            key={coupon.code}
                            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-400 transition group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="size-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                                            <Tag size={18} />
                                        </div>
                                        <div>
                                            <span className="text-base font-black text-slate-900">{coupon.code}</span>
                                            <p className="text-[10px] text-slate-400 uppercase font-semibold">
                                                {coupon.forNewUser ? "New Users Only" : "All Travelers"}
                                            </p>
                                        </div>
                                    </div>

                                    <span className="text-sm font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                                        {coupon.discount}% OFF
                                    </span>
                                </div>

                                <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                                    {coupon.description}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                <span className="text-[11px] text-slate-400 font-semibold">Valid on all bus routes</span>
                                <button
                                    type="button"
                                    onClick={() => handleCopy(coupon.code)}
                                    className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs rounded-xl transition active:scale-95 shadow-sm"
                                >
                                    {copiedCode === coupon.code ? (
                                        <>
                                            <Check size={14} className="text-emerald-400" />
                                            <span>Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy size={14} />
                                            <span>Copy Code</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
