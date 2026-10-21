'use client'
import { usePathname } from "next/navigation";
import { Bus, CalendarPlus, Home, LayoutList, Route } from "lucide-react";
import Link from "next/link";

const StoreSidebar = ({ storeInfo }) => {
    const pathname = usePathname();

    const sidebarLinks = [
        { name: 'Dashboard', href: '/store', icon: Home },
        { name: 'Schedule New Trip', href: '/store/add-product', icon: CalendarPlus },
        { name: 'Manage Bus Fleet', href: '/store/manage-product', icon: Route },
        { name: 'Passenger Bookings', href: '/store/orders', icon: LayoutList },
    ];

    return (
        <div className="inline-flex h-full flex-col gap-5 border-r border-slate-200 sm:min-w-60 bg-white">
            <div className="flex flex-col gap-2 justify-center items-center pt-8 max-sm:hidden px-4 text-center">
                <div className="size-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-200">
                    <Bus size={26} />
                </div>
                <p className="text-sm font-bold text-slate-800">{storeInfo?.name || "Royal Travels"}</p>
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    Verified Operator
                </span>
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

export default StoreSidebar;
