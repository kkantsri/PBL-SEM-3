'use client'
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import StickerSlapFooter from "@/components/StickerSlapFooter";

export default function PublicLayout({ children }) {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const isSearchBuses = pathname === "/shop";

    return (
        <>
            <Navbar />
            {children}
            {!isHome && (
                isSearchBuses ? (
                    <StickerSlapFooter
                        showSearch={false}
                        paper="#ffffff"
                        panel="#ffffff"
                        ink="#0f172a"
                        cream="#0f172a"
                        accent="#2563eb"
                    />
                ) : (
                    <StickerSlapFooter showSearch={false} />
                )
            )}
        </>
    );
}
