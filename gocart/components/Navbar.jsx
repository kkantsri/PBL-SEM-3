'use client'
import { Bus, Ticket, User, MapPin } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [search, setSearch] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const selectedSeats = useSelector((state) => state.booking?.selectedSeats || []);
    const isShopPage = pathname === "/shop";
    const isHomePage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            // Keep header fully transparent across all hero scroll sections (first 2.2 viewport heights)
            const heroThreshold = typeof window !== "undefined" ? window.innerHeight * 2.0 : 800;
            setScrolled(window.scrollY > heroThreshold);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            router.push(`/shop?to=${encodeURIComponent(search.trim())}`);
        }
    };

    return (
        <nav
            className={`inset-x-0 z-50 transition-all duration-300 ${
                isHomePage
                    ? `fixed top-0 ${
                        scrolled
                            ? "bg-black/80 backdrop-blur-md border-b border-white/10 shadow-2xl py-3 text-white"
                            : "bg-gradient-to-b from-black/45 via-black/10 to-transparent border-none py-4 text-white"
                    }`
                    : "sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3 text-slate-900"
            }`}
        >
            <div className="mx-4 sm:mx-8">
                <div className="flex items-center justify-between max-w-7xl mx-auto transition-all">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className={`size-10 rounded-xl flex items-center justify-center shadow-md transition ${
                            isHomePage
                                ? "bg-black/40 backdrop-blur-md border border-white/20 text-blue-400 group-hover:border-blue-400"
                                : "bg-blue-50 border border-blue-200 text-blue-600 group-hover:bg-blue-100"
                        }`}>
                            <Bus size={22} />
                        </div>
                        <div className={`relative text-2xl sm:text-3xl font-extrabold tracking-tight drop-shadow-md ${
                            isHomePage ? "text-white" : "text-slate-900"
                        }`}>
                            Bus<span className={isHomePage ? "text-blue-400" : "text-blue-600"}>Go</span>
                            <span className={isHomePage ? "text-blue-400" : "text-blue-600"}>.</span>
                            <span className={`absolute -top-1.5 -right-11 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                                isHomePage
                                    ? "text-zinc-200 bg-white/15 backdrop-blur-md border border-white/20"
                                    : "text-slate-600 bg-slate-100 border border-slate-200"
                            }`}>
                                India
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold text-sm">
                        <Link
                            href="/"
                            className={`transition flex items-center gap-1.5 ${
                                isHomePage
                                    ? "text-zinc-200 hover:text-white drop-shadow-md font-medium"
                                    : "text-slate-900 hover:text-blue-600 font-semibold"
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/shop"
                            className={`transition flex items-center gap-1.5 ${
                                isHomePage
                                    ? "text-zinc-200 hover:text-white drop-shadow-md font-medium"
                                    : "text-slate-900 hover:text-blue-600 font-semibold"
                            }`}
                        >
                            Search Buses
                        </Link>
                        <Link
                            href="/pricing"
                            className={`transition flex items-center gap-1.5 ${
                                isHomePage
                                    ? "text-zinc-200 hover:text-white drop-shadow-md font-medium"
                                    : "text-slate-900 hover:text-blue-600 font-semibold"
                            }`}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/orders"
                            className={`transition flex items-center gap-1.5 ${
                                isHomePage
                                    ? "text-zinc-200 hover:text-white drop-shadow-md font-medium"
                                    : "text-slate-900 hover:text-blue-600 font-semibold"
                            }`}
                        >
                            <Ticket size={16} />
                            My Bookings
                        </Link>
                        <Link
                            href="/store"
                            className={`transition text-xs font-semibold px-3 py-1.5 rounded-full shadow-xs ${
                                isHomePage
                                    ? "text-zinc-300 bg-black/30 hover:bg-black/50 backdrop-blur-md border border-white/15"
                                    : "text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 font-semibold"
                            }`}
                        >
                            Operator Portal
                        </Link>

                        {/* Search Bar (Hidden on Search Buses page) */}
                        {!isShopPage && (
                            <form
                                onSubmit={handleSearch}
                                className={`hidden xl:flex items-center w-64 text-sm gap-2 px-3.5 py-2 rounded-full border transition shadow-xs ${
                                    isHomePage
                                        ? "bg-black/40 backdrop-blur-md border-white/15 focus-within:border-blue-400 focus-within:bg-black/60"
                                        : "bg-slate-100 border-slate-200 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100"
                                }`}
                            >
                                <MapPin size={16} className={isHomePage ? "text-zinc-400" : "text-slate-500"} />
                                <input
                                    className={`w-full bg-transparent outline-none text-xs ${
                                        isHomePage
                                            ? "placeholder-zinc-400 text-white"
                                            : "placeholder-slate-400 text-slate-900 font-medium"
                                    }`}
                                    type="text"
                                    placeholder="Search stop (e.g. Clement Town)"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </form>
                        )}

                        {/* Booking Draft Badge */}
                        {selectedSeats.length > 0 && (
                            <Link
                                href="/cart"
                                className={`relative flex items-center gap-2 font-semibold px-3 py-1.5 rounded-full border transition ${
                                    isHomePage
                                        ? "text-blue-300 bg-blue-500/20 backdrop-blur-md border-blue-400/40 hover:bg-blue-500/30"
                                        : "text-blue-700 bg-blue-50 border-blue-200 hover:bg-blue-100"
                                }`}
                            >
                                <Ticket size={16} />
                                <span>{selectedSeats.length} Seat{selectedSeats.length > 1 ? 's' : ''} Selected</span>
                            </Link>
                        )}

                        <Link
                            href="/orders"
                            className={`flex items-center gap-2 px-5 py-2 transition text-xs font-bold rounded-full shadow-md ${
                                isHomePage
                                    ? "bg-white/95 hover:bg-white text-black shadow-black/20"
                                    : "bg-slate-900 hover:bg-black text-white"
                            }`}
                        >
                            <User size={15} />
                            Account
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <div className="flex md:hidden items-center gap-3">
                        <Link
                            href="/shop"
                            className={`p-2 transition ${
                                isHomePage
                                    ? "text-zinc-200 hover:text-white drop-shadow-md"
                                    : "text-slate-900 hover:text-blue-600"
                            }`}
                        >
                            <Bus size={20} />
                        </Link>
                        <Link
                            href="/orders"
                            className={`p-2 relative transition ${
                                isHomePage
                                    ? "text-zinc-200 hover:text-white drop-shadow-md"
                                    : "text-slate-900 hover:text-blue-600"
                            }`}
                        >
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
