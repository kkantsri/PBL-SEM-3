'use client'
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickerSlapFooter from "@/components/StickerSlapFooter";

export default function PublicLayout({ children }) {
    const pathname = usePathname();
    const isSecondPage = pathname === "/shop";

    return (
        <>
            <Navbar />
            {children}
            {isSecondPage ? <StickerSlapFooter /> : <Footer />}
        </>
    );
}
