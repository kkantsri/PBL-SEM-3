'use client'
import { useState } from "react";
import { Bus, CheckCircle2, ShieldCheck } from "lucide-react";
import toast from "react-hot-toast";

export default function RegisterOperatorPage() {
    const [submitted, setSubmitted] = useState(false);
    const [info, setInfo] = useState({
        name: "",
        regNo: "",
        fleetSize: "10",
        description: "",
        email: "",
        contact: "",
        city: "Delhi",
    });

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Application submitted! Our operations team will verify your fleet within 24 hours.");
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
                
                {!submitted ? (
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="size-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                <Bus size={22} />
                            </div>
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                                    Register as a Bus Operator
                                </h1>
                                <p className="text-xs text-slate-500 mt-0.5">
                                    Join India&apos;s fastest growing bus ticketing network and increase your daily bookings.
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Travels / Agency Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="e.g. Royal Express Travels"
                                        value={info.name}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-800 outline-none focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Fleet Size (Total Buses)</label>
                                    <input
                                        type="number"
                                        name="fleetSize"
                                        required
                                        min="1"
                                        placeholder="e.g. 15"
                                        value={info.fleetSize}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-800 outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Official Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="operator@travels.com"
                                        value={info.email}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-800 outline-none focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Contact Phone</label>
                                    <input
                                        type="tel"
                                        name="contact"
                                        required
                                        placeholder="+91 98765 43210"
                                        value={info.contact}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-800 outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Head Office City / Terminal</label>
                                <input
                                    type="text"
                                    name="city"
                                    required
                                    placeholder="e.g. Kashmere Gate ISBT, New Delhi"
                                    value={info.city}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-800 outline-none focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company Description & Primary Routes</label>
                                <textarea
                                    name="description"
                                    rows={4}
                                    placeholder="Tell us about the routes you operate (e.g. Delhi to Jaipur, Dehradun, Manali), bus types, and safety records..."
                                    value={info.description}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-800 outline-none focus:border-blue-500 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition active:scale-[0.99] mt-6"
                            >
                                Submit Operator Application
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="size-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 size={36} />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900">Application Received!</h2>
                        <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto">
                            Thank you for applying to become a partner operator on BusGo. Our verification officer will review your fleet documentation and get in touch shortly.
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
}
