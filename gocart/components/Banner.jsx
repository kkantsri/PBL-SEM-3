'use client'
import React from 'react';
import toast from 'react-hot-toast';
import { Tag, Sparkles } from 'lucide-react';

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
        <div className="w-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold text-white text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 shadow-xs">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex items-center gap-2 mx-auto sm:mx-0">
                    <Sparkles size={16} className="text-amber-300 animate-pulse" />
                    <span>Get 20% Instant OFF on Your First Bus Booking! Use code <strong>FIRSTBUS</strong></span>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={handleClaim}
                        type="button"
                        className="text-xs font-bold text-blue-900 bg-white hover:bg-blue-50 px-5 py-1.5 rounded-full max-sm:hidden transition active:scale-95 shadow-sm"
                    >
                        Copy Code
                    </button>
                    <button
                        onClick={() => setIsOpen(false)}
                        type="button"
                        className="text-white hover:opacity-75 p-1 transition"
                        title="Close banner"
                    >
                        ✕
                    </button>
                </div>
            </div>
        </div>
    );
}
