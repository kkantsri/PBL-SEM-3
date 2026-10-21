'use client'
import Link from "next/link";
import { Bus, User } from "lucide-react";

const StoreNavbar = () => {
    return (
        <div className="flex items-center justify-between px-6 sm:px-12 py-3.5 border-b border-slate-200 bg-white">
            <Link href="/" className="flex items-center gap-2">
                <div className="size-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-sm">
                    <Bus size={20} />
                </div>
                <div className="relative text-2xl font-extrabold text-slate-800">
                    Bus<span className="text-blue-600">Go</span>
                    <span className="absolute -top-1 -right-16 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-blue-700 bg-blue-50 border border-blue-200">
                        Operator
                    </span>
                </div>
            </Link>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                <User size={14} className="text-blue-600" />
                <span>Royal Travels Operator</span>
            </div>
        </div>
    );
};

export default StoreNavbar;
