'use client'
import Image from "next/image"
import { MapPin, Mail, Phone, Bus } from "lucide-react"

const StoreInfo = ({ store }) => {
    return (
        <div className="flex-1 space-y-2 text-sm">
            <div className="size-16 rounded-2xl overflow-hidden border border-slate-200 mb-3 flex items-center justify-center bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black text-xl shadow-sm">
                <span>{store.name?.split(' ').map(n => n[0]).join('').slice(0, 2) || "OP"}</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 items-center">
                <h3 className="text-xl font-bold text-slate-800">{store.name}</h3>
                <span className="text-xs text-slate-400">@{store.username}</span>

                {/* Status Badge */}
                <span
                    className={`text-xs font-semibold px-3 py-0.5 rounded-full ${
                        store.status === 'pending'
                            ? 'bg-amber-100 text-amber-800'
                            : store.status === 'rejected'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-emerald-100 text-emerald-800'
                    }`}
                >
                    {store.status}
                </span>
            </div>

            <p className="text-slate-600 my-3 max-w-2xl text-xs">{store.description}</p>
            <p className="flex items-center gap-2 text-xs text-slate-500"><MapPin size={14} className="text-blue-500" /> {store.address}</p>
            <p className="flex items-center gap-2 text-xs text-slate-500"><Phone size={14} className="text-emerald-500" /> {store.contact}</p>
            <p className="flex items-center gap-2 text-xs text-slate-500"><Mail size={14} className="text-amber-500" /> {store.email}</p>
            
            {store.user && (
                <div className="flex items-center gap-2 text-xs pt-2">
                    <div className="size-7 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
                        {store.user.name?.[0] || "O"}
                    </div>
                    <div>
                        <p className="text-slate-700 font-semibold">{store.user.name}</p>
                        <p className="text-slate-400 text-[10px]">{store.user.email}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StoreInfo;
