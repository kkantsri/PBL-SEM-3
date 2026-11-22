"use client";

import * as React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  cubicBezier,
} from "motion/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import SearchWidget from "@/components/SearchWidget";
import { Globe3DDemo } from "@/components/Globe3DDemo";
import { Sparkles, Tag, ShieldCheck, Clock } from "lucide-react";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const ease = cubicBezier(0.42, 0, 0, 1);

function Slat({ index, count, progress, src }) {
  const mid = (count - 1) / 2;
  const order = Math.abs(index - mid) / Math.max(mid, 1);
  const start = 0.12 + order * 0.16;
  const end = start + 0.42;
  const dir = index % 2 === 0 ? -1 : 1;
  const y = useTransform(progress, [start, end], ["0%", `${dir * 104}%`], { ease });
  const scaleX = useTransform(progress, [start, end], [1, 0.82], { ease });

  return (
    <motion.div
      aria-hidden
      className="relative h-full overflow-hidden will-change-transform"
      style={{
        y,
        scaleX,
        width: `${100 / count}%`,
      }}
    >
      <div
        className="absolute inset-y-0 bg-cover bg-center contrast-[1.06] brightness-[1.04]"
        style={{
          backgroundImage: `url("${src}")`,
          width: `${count * 100}%`,
          left: `${-index * 100}%`,
          imageRendering: "auto",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
      />
    </motion.div>
  );
}

const BUS_IMAGE = "/mountain-bus.jpg";

export function SlatShutterHero({
  coverSrc = BUS_IMAGE,
  kicker = "Verified & Safe Mountain Transit",
  coverTitle = ["Safe Journeys Through Every Mile,", "Travel with Complete Trust"],
  caption = "24/7 passenger emergency support, sanitized coaches, vetted professional drivers, and live GPS route monitoring across all corridors.",
  slats = 8,
  length = 2.2,
  className = "",
}) {
  const ref = React.useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

  const coverOpacity = useTransform(progress, [0, 0.28], [1, 0]);
  const coverBaseOpacity = useTransform(progress, [0.06, 0.22], [1, 0]);
  const revealScale = useTransform(progress, [0.1, 0.85], [1.12, 1], { ease });
  const revealContentOpacity = useTransform(progress, [0.3, 0.55], [0, 1]);
  const revealContentY = useTransform(progress, [0.3, 0.55], ["30px", "0px"]);

  if (reduce) {
    return (
      <section className={cn("relative min-h-screen w-full overflow-hidden bg-[#050508]", className)}>
        <img
          src={coverSrc}
          alt="BusGo Hero"
          className="absolute inset-0 h-full w-full object-cover contrast-[1.06] brightness-[1.04]"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-20 flex flex-col justify-between min-h-screen">
          <div>
            {kicker && <p className="mb-4 text-[15px] text-white/90 drop-shadow-md">{kicker}</p>}
            <h1 className="text-[clamp(36px,5.2vw,78px)] font-normal leading-[1.03] tracking-[-0.035em] text-white drop-shadow-xl mb-12">
              {coverTitle[0]} <br /> {coverTitle[1]}
            </h1>
          </div>
          <div className="w-full">
            <SearchWidget />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className={cn("relative w-full bg-[#050508]", className)}
      style={{ height: `${length * 100}svh` }}
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        
        {/* 2nd Slide: Pure Deep Black Space with Exact 3D Earth */}
        <div className="absolute inset-0 bg-[#050508] overflow-hidden flex items-center justify-center">
          {/* 3D Rotating Interactive Earth */}
          <motion.div
            className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-auto"
            style={{ scale: revealScale }}
          >
            <Globe3DDemo className="w-full h-full absolute inset-0" />
          </motion.div>
        </div>

        {/* 1st Slide: Seamless Cover Image (Mountain Bus) behind the slats */}
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center contrast-[1.06] brightness-[1.04]"
          style={{
            backgroundImage: `url("${coverSrc}")`,
            opacity: coverBaseOpacity,
          }}
        />

        {/* Animated Slats Shutter */}
        <div className="absolute inset-0 flex overflow-hidden">
          {Array.from({ length: slats }).map((_, i) => (
            <Slat key={i} index={i} count={slats} progress={progress} src={coverSrc} />
          ))}
        </div>

        {/* 1st Slide Content (Fades out smoothly as user scrolls) */}
        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-8 p-6 md:px-12 md:pb-12 z-20"
          style={{ opacity: coverOpacity }}
        >
          <div className="min-w-0 max-w-3xl w-full">
            {kicker && (
              <p className="mb-4 text-[15px] text-white/95 font-medium drop-shadow-md">
                {kicker}
              </p>
            )}
            <h1 className="text-[clamp(36px,5.2vw,78px)] font-normal leading-[1.03] tracking-[-0.035em] text-white drop-shadow-xl">
              <span className="block overflow-hidden pb-[0.08em] md:whitespace-nowrap">
                {coverTitle[0]}
              </span>
              <span className="block overflow-hidden pb-[0.08em] md:whitespace-nowrap">
                {coverTitle[1]}
              </span>
            </h1>
          </div>
          {caption && (
            <p className="hidden max-w-[30ch] text-right text-[15px] leading-snug text-white/90 md:block font-normal drop-shadow-md shrink-0">
              {caption}
            </p>
          )}
        </motion.div>

        {/* 2nd Slide Content (SearchWidget, Headings, Promo Badges over Black & 3D Globe) */}
        <motion.div
          className="absolute inset-0 z-30 flex flex-col justify-center items-center px-4 sm:px-6 pt-14 pb-8 overflow-y-auto pointer-events-none"
          style={{
            opacity: revealContentOpacity,
            y: revealContentY,
          }}
        >
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center pointer-events-auto">
            
            {/* Dijkstra Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-950/60 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs font-semibold border border-blue-400/30 shadow-inner mb-4">
              <Sparkles size={14} className="text-blue-400" />
              <span>Dijkstra-Powered Campus & City Bus Booking</span>
            </div>

            {/* Main Heading */}
            <div className="text-center max-w-3xl mx-auto mb-6">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] drop-shadow-lg">
                Travel Made Simple. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300">
                  Book Local Buses
                </span> in Seconds.
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-300 font-normal max-w-xl mx-auto leading-relaxed drop-shadow">
                Instant seat booking across Clement Town, ISBT Dehradun, Clock Tower, Rajpur Road, and campus corridors.
              </p>
            </div>

            {/* Core Search Widget with To/From Options */}
            <div className="w-full mb-6">
              <SearchWidget />
            </div>

            {/* Promo Strip Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-4xl mx-auto">
              <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/15 shadow-md">
                <div className="size-8 rounded-lg bg-black/40 border border-white/10 text-blue-400 flex items-center justify-center shrink-0">
                  <Tag size={15} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Code FIRSTBUS</p>
                  <p className="text-[10px] text-zinc-300">20% instant discount</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/15 shadow-md">
                <div className="size-8 rounded-lg bg-black/40 border border-white/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck size={15} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">100% Refund</p>
                  <p className="text-[10px] text-zinc-300">Instant cancellations</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/15 shadow-md">
                <div className="size-8 rounded-lg bg-black/40 border border-white/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Clock size={15} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Live Tracking</p>
                  <p className="text-[10px] text-zinc-300">GPS location on all buses</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default SlatShutterHero;
