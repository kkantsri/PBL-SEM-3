import { busTypes } from "@/assets/busData";

const CategoriesMarquee = () => {
    return (
        <div className="overflow-hidden w-full relative max-w-7xl mx-auto select-none group my-8">
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
            <div className="flex min-w-[200%] animate-[marqueeScroll_25s_linear_infinite] group-hover:[animation-play-state:paused] gap-4">
                {[...busTypes, ...busTypes, ...busTypes].map((type, index) => (
                    <span
                        key={index}
                        className="px-5 py-2 bg-slate-100 border border-slate-200/80 rounded-full text-slate-600 text-xs font-semibold whitespace-nowrap shadow-xs"
                    >
                        🚌 {type}
                    </span>
                ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
        </div>
    );
};

export default CategoriesMarquee;
