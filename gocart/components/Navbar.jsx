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
        <nav className="sticky top-0 z-50 bg-black/85 backdrop-blur-md border-b border-white/10 text-white shadow-xl shadow-black/40 transition-colors">
            <div className="mx-4 sm:mx-8">
                <div className="flex items-center justify-between max-w-7xl mx-auto py-3.5 transition-all">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="size-10 bg-zinc-900 border border-white/15 rounded-xl flex items-center justify-center text-blue-400 shadow-md group-hover:border-blue-400 transition">
                            <Bus size={22} />
                        </div>
                        <div className="relative text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                            Bus<span className="text-blue-400">Go</span>
                            <span className="text-blue-400">.</span>
                            <span className="absolute -top-1.5 -right-11 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-zinc-300 bg-white/10 border border-white/15">
                                India
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-zinc-300 text-sm">
                        <Link href="/" className="hover:text-white transition flex items-center gap-1.5">
                            Home
                        </Link>
                        <Link href="/shop" className="hover:text-white transition flex items-center gap-1.5">
                            Search Buses
                        </Link>
                        <Link href="/orders" className="hover:text-white transition flex items-center gap-1.5">
                            <Ticket size={16} />
                            My Bookings
                        </Link>
                        <Link href="/store" className="hover:text-white transition text-xs font-semibold text-zinc-400 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full">
                            Operator Portal
                        </Link>

                        {/* Search Bar */}
                        <form onSubmit={handleSearch} className="hidden xl:flex items-center w-64 text-sm gap-2 bg-zinc-900/90 px-3.5 py-2 rounded-full border border-white/10 focus-within:border-blue-400 focus-within:bg-zinc-900 transition">
                            <MapPin size={16} className="text-zinc-400" />
                            <input
                                className="w-full bg-transparent outline-none placeholder-zinc-500 text-xs text-white"
                                type="text"
                                placeholder="Search stop (e.g. Clement Town)"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </form>

                        {/* Booking Draft Badge */}
                        {selectedSeats.length > 0 && (
                            <Link href="/cart" className="relative flex items-center gap-2 text-blue-300 font-semibold bg-blue-500/15 px-3 py-1.5 rounded-full border border-blue-500/30 hover:bg-blue-500/25 transition">
                                <Ticket size={16} />
                                <span>{selectedSeats.length} Seat{selectedSeats.length > 1 ? 's' : ''} Selected</span>
                            </Link>
                        )}

                        <Link href="/orders" className="flex items-center gap-2 px-5 py-2 bg-white hover:bg-zinc-200 transition text-black text-xs font-bold rounded-full shadow-md">
                            <User size={15} />
                            Account
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <div className="flex md:hidden items-center gap-3">
                        <Link href="/shop" className="p-2 text-zinc-300 hover:text-white">
                            <Bus size={20} />
                        </Link>
                        <Link href="/orders" className="p-2 text-zinc-300 hover:text-white relative">
                            <Ticket size={20} />
                            {selectedSeats.length > 0 && (
                                <span className="absolute top-1 right-1 size-2 bg-blue-500 rounded-full" />
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
