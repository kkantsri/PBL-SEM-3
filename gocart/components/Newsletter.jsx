'use client'
import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
    return (
        <section className="py-20 bg-zinc-950 border-t border-zinc-800 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    Never Miss a Deal
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
                    Get Exclusive Transit Updates & Passes
                </h2>
                <p className="text-sm text-zinc-400 mt-2 max-w-xl mx-auto">
                    Subscribe for campus express schedules, weekend fare discounts, and route updates delivered directly to your inbox.
                </p>

                <form onSubmit={(e) => e.preventDefault()} className="flex items-center bg-zinc-900 p-1.5 rounded-full w-full max-w-lg mx-auto mt-8 border border-zinc-800 focus-within:border-zinc-600 transition shadow-lg shadow-black/40">
                    <Mail size={18} className="text-zinc-400 ml-4 shrink-0" />
                    <input
                        className="flex-1 px-3 py-2 bg-transparent text-sm text-white outline-none placeholder-zinc-500"
                        type="email"
                        placeholder="Enter your email address"
                        required
                    />
                    <button
                        type="submit"
                        className="font-bold text-xs uppercase tracking-wider bg-white hover:bg-zinc-200 active:scale-95 text-black px-6 py-3 rounded-full transition shadow-md cursor-pointer"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
