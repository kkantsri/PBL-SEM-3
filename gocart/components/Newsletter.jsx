import React from 'react';
import Title from './Title';
import { Mail } from 'lucide-react';

const Newsletter = () => {
    return (
        <section className="py-20 bg-white border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    Never Miss a Deal
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
                    Get Exclusive Bus Travel Deals
                </h2>
                <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
                    Subscribe for secret weekend coupon codes, holiday discounts, and route updates delivered directly to your inbox.
                </p>

                <form onSubmit={(e) => e.preventDefault()} className="flex items-center bg-slate-50 p-1.5 rounded-full w-full max-w-lg mx-auto mt-8 border border-slate-200 focus-within:border-blue-400 focus-within:bg-white transition shadow-sm">
                    <Mail size={18} className="text-slate-400 ml-4 shrink-0" />
                    <input
                        className="flex-1 px-3 py-2 bg-transparent text-sm text-slate-800 outline-none placeholder-slate-400"
                        type="email"
                        placeholder="Enter your email address"
                        required
                    />
                    <button
                        type="submit"
                        className="font-bold text-xs uppercase tracking-wider bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-6 py-3 rounded-full transition shadow-md shadow-blue-200"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
