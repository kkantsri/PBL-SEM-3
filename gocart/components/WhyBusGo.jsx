import { Navigation, ShieldCheck, RefreshCw, Headphones } from "lucide-react";

const features = [
    {
        icon: Navigation,
        title: "Live Dijkstra Routing",
        description: "Calculates the shortest transit hops across Clement Town, ISBT, and Rajpur Road with C++ algorithmic precision.",
        color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
        icon: ShieldCheck,
        title: "Verified Operators",
        description: "Every operator undergoes strict safety and quality audits. Travel with clean coaches and certified drivers.",
        color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
        icon: RefreshCw,
        title: "Instant Refund & Cancellation",
        description: "Plans changed? Cancel your ticket with one click and receive instant refunds directly to your payment source.",
        color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
        icon: Headphones,
        title: "24x7 Travel Support",
        description: "Our dedicated support team is available around the clock to assist you before, during, and after your trip.",
        color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
];

const WhyBusGo = () => {
    return (
        <section className="py-20 bg-transparent text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                        Why Choose Us
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
                        Everything You Need for a Seamless Journey
                    </h2>
                    <p className="text-sm text-zinc-400 mt-2">
                        We make campus and city bus travel effortless, safe, and reliable.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/15 p-6 hover:border-white/30 hover:shadow-2xl transition group flex flex-col justify-between"
                            >
                                <div>
                                    <div className={`size-12 rounded-xl border flex items-center justify-center mb-5 ${item.color}`}>
                                        <Icon size={22} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-zinc-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default WhyBusGo;
