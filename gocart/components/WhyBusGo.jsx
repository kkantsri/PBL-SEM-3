import { Navigation, ShieldCheck, RefreshCw, Headphones } from "lucide-react";

const features = [
    {
        icon: Navigation,
        title: "Live GPS Tracking",
        description: "Know your bus location in real-time. Share live tracking links with friends and family for peace of mind.",
        color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
        icon: ShieldCheck,
        title: "Verified Operators",
        description: "Every operator undergoes strict safety and quality audits. Travel with clean coaches and certified drivers.",
        color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
        icon: RefreshCw,
        title: "Instant Refund & Cancellation",
        description: "Plans changed? Cancel your ticket with one click and receive instant refunds directly to your payment source.",
        color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
        icon: Headphones,
        title: "24x7 Travel Support",
        description: "Our dedicated support team is available around the clock to assist you before, during, and after your trip.",
        color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    },
];

const WhyBusGo = () => {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                        Why Choose Us
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                        Everything You Need for a Seamless Journey
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                        We make intercity bus travel effortless, safe, and reliable.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={`feat_${idx}`}
                                className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-lg transition group"
                            >
                                <div>
                                    <div className={`size-12 rounded-xl flex items-center justify-center border mb-4 group-hover:scale-110 transition ${item.color}`}>
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-base font-bold text-slate-800 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
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
