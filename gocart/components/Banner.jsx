'use client'
import React from 'react';
import toast from 'react-hot-toast';
import { Sparkles } from 'lucide-react';

export default function Banner() {
    const [isOpen, setIsOpen] = React.useState(true);

    const handleClaim = () => {
        setIsOpen(false);
        toast.success('Coupon FIRSTBUS copied to clipboard!');
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
            navigator.clipboard.writeText('FIRSTBUS');
        }
    };

    return isOpen && (
        <div className="w-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium text-zinc-300 text-center bg-zinc-950 border-b border-white/10">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex items-center gap-2 mx-auto sm:mx-0">
                    <Sparkles size={15} className="text-amber-400 animate-pulse" />
                    <span>Get 20% Instant OFF on Your First Bus Booking! Use code <strong className="text-white font-bold">FIRSTBUS</strong></span>
                </div>
                <div className="flex items-center space-x-3">
                    <button
                        onClick={handleClaim}
                        type="button"
                        className="text-xs font-bold text-black bg-white hover:bg-zinc-200 px-4 py-1 rounded-full max-sm:hidden transition active:scale-95 shadow-xs"
                    >
                        Copy Code
                    </button>
                    <button
                        onClick={() => setIsOpen(false)}
                        type="button"
                        className="text-zinc-400 hover:text-white p-1 transition"
                        title="Close banner"
                    >
                        ✕
                    </button>
                </div>
            </div>
        </div>
    );
}
