'use client'
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import StickerSlapFooter from "@/components/StickerSlapFooter";

export default function PublicLayout({ children }) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <>
            <Navbar />
            {children}
            {!isHome && <StickerSlapFooter showSearch={false} />}
        </>
    );
}
