import Link from "next/link";
import { Bus, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    const linkSections = [
        {
            title: "POPULAR ROUTES",
            links: [
                { text: "Delhi to Jaipur Bus", path: '/shop?from=Delhi&to=Jaipur' },
                { text: "Delhi to Dehradun Bus", path: '/shop?from=Delhi&to=Dehradun' },
                { text: "Mumbai to Pune Bus", path: '/shop?from=Mumbai&to=Pune' },
                { text: "Bangalore to Chennai Bus", path: '/shop?from=Bangalore&to=Chennai' },
                { text: "Hyderabad to Bangalore Bus", path: '/shop?from=Hyderabad&to=Bangalore' },
            ]
        },
        {
            title: "TOP OPERATORS",
            links: [
                { text: "Royal Travels", path: '/shop' },
                { text: "Neeta Travels", path: '/shop' },
                { text: "SRS Travels", path: '/shop' },
                { text: "VRL Travels", path: '/shop' },
                { text: "Shrinath Travels", path: '/shop' },
            ]
        },
        {
            title: "QUICK LINKS",
            links: [
                { text: "Search Buses", path: '/shop' },
                { text: "My Bookings", path: '/orders' },
                { text: "Operator Portal", path: '/store' },
                { text: "Admin Dashboard", path: '/admin' },
                { text: "Cancellation Policy", path: '/' },
            ]
        }
    ];

    return (
        <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
                    
                    {/* Brand column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="size-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                                <Bus size={22} />
                            </div>
                            <span className="text-2xl font-black text-white tracking-tight">
                                Bus<span className="text-blue-500">Go</span>.
                            </span>
                        </Link>
                        <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
                            India&apos;s leading online bus ticketing platform. Book AC, Sleeper, and Luxury buses with live GPS tracking, verified operators, and instant refunds.
                        </p>

                        <div className="space-y-2 text-xs text-slate-400 font-medium">
                            <div className="flex items-center gap-2">
                                <Phone size={14} className="text-blue-400" />
                                <span>24x7 Helpline: +91 1800 200 4567</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={14} className="text-blue-400" />
                                <span>support@busgo.in</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={14} className="text-blue-400" />
                                <span>Connaught Place, New Delhi, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Nav columns */}
                    {linkSections.map((section, idx) => (
                        <div key={idx} className="lg:col-span-1">
                            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-2 text-xs">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.path} className="hover:text-white transition">
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
                    <p>© 2026 BusGo Technologies Pvt Ltd. All Rights Reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/" className="hover:text-slate-400 transition">Privacy Policy</Link>
                        <Link href="/" className="hover:text-slate-400 transition">Terms of Service</Link>
                        <Link href="/" className="hover:text-slate-400 transition">Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
