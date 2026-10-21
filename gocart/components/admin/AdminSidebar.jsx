'use client'
import { usePathname } from "next/navigation";
import { Bus, Home, ShieldCheck, TicketPercent } from "lucide-react";
import Link from "next/link";

const AdminSidebar = () => {
    const pathname = usePathname();

    const sidebarLinks = [
        { name: 'Dashboard', href: '/admin', icon: Home },
        { name: 'Bus Operators', href: '/admin/stores', icon: Bus },
        { name: 'Approve Operators', href: '/admin/approve', icon: ShieldCheck },
        { name: 'Travel Coupons', href: '/admin/coupons', icon: TicketPercent },
    ];

    return (
        <div className="inline-flex h-full flex-col gap-5 border-r border-slate-200 sm:min-w-60 bg-white">
            <div className="flex flex-col gap-2 justify-center items-center pt-8 max-sm:hidden">
                <div className="size-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-200">
                    <Bus size={28} />
                </div>
                <p className="text-sm font-bold text-slate-800">BusGo Admin</p>
            </div>

            <div className="max-sm:mt-6">
                {sidebarLinks.map((link, index) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={index}
                            href={link.href}
                            className={`relative flex items-center gap-3 text-xs font-semibold p-3.5 transition ${
                                isActive
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                            }`}
                        >
                            <Icon size={18} className="sm:ml-4" />
                            <p className="max-sm:hidden">{link.name}</p>
                            {isActive && <span className="absolute bg-blue-600 right-0 top-1.5 bottom-1.5 w-1 rounded-l"></span>}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default AdminSidebar;
