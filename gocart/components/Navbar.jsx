'use client'
import { Bus, Ticket, User, MapPin } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const selectedSeats = useSelector((state) => state.booking?.selectedSeats || []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            router.push(`/shop?to=${encodeURIComponent(search.trim())}`);
        }
    };

    return (
        <nav className="relative bg-white sticky top-0 z-50 shadow-sm border-b border-slate-200">
            <div className="mx-4 sm:mx-8">
                <div className="flex items-center justify-between max-w-7xl mx-auto py-3.5 transition-all">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="size-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-200">
                            <Bus size={24} />
                        </div>
                        <div className="relative text-3xl font-extrabold tracking-tight text-slate-800">
                            Bus<span className="text-blue-600">Go</span>
                            <span className="text-blue-600">.</span>
                            <span className="absolute -top-1.5 -right-11 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-blue-700 bg-blue-50 border border-blue-200">
                                India
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-slate-600 text-sm">
                        <Link href="/" className="hover:text-blue-600 transition flex items-center gap-1.5">
                            Home
                        </Link>
                        <Link href="/shop" className="hover:text-blue-600 transition flex items-center gap-1.5">
                            Search Buses
                        </Link>
                        <Link href="/orders" className="hover:text-blue-600 transition flex items-center gap-1.5">
                            <Ticket size={16} />
                            My Bookings
                        </Link>
                        <Link href="/store" className="hover:text-blue-600 transition text-xs font-semibold text-slate-500 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full">
                            Operator Portal
                        </Link>

                        {/* Search Bar */}
                        <form onSubmit={handleSearch} className="hidden xl:flex items-center w-64 text-sm gap-2 bg-slate-100 px-3.5 py-2 rounded-full border border-slate-200 focus-within:border-blue-400 focus-within:bg-white transition">
                            <MapPin size={16} className="text-slate-400" />
                            <input
                                className="w-full bg-transparent outline-none placeholder-slate-400 text-xs text-slate-700"
                                type="text"
                                placeholder="Search destination (e.g. Jaipur)"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </form>

                        {/* Booking Draft Badge */}
                        {selectedSeats.length > 0 && (
                            <Link href="/cart" className="relative flex items-center gap-2 text-blue-600 font-semibold bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200 hover:bg-blue-100 transition">
                                <Ticket size={16} />
                                <span>{selectedSeats.length} Seat{selectedSeats.length > 1 ? 's' : ''} Selected</span>
                            </Link>
                        )}

                        <Link href="/orders" className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 transition text-white text-xs font-semibold rounded-full shadow-sm shadow-blue-300">
                            <User size={15} />
                            Account
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <div className="flex md:hidden items-center gap-3">
                        <Link href="/shop" className="p-2 text-slate-600 hover:text-blue-600">
                            <Bus size={20} />
                        </Link>
                        <Link href="/orders" className="p-2 text-slate-600 hover:text-blue-600 relative">
                            <Ticket size={20} />
                            {selectedSeats.length > 0 && (
                                <span className="absolute top-1 right-1 size-2 bg-blue-600 rounded-full" />
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
