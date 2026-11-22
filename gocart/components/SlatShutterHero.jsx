"use client";

import * as React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
  useReducedMotion,
  cubicBezier,
  AnimatePresence,
} from "motion/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const ease = cubicBezier(0.42, 0, 0, 1);

function Slat({ index, count, progress, src }) {
  // open from the centre outwards
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

function Headline({ lines, tone }) {
  return (
    <motion.h1
      key={tone}
      className="text-[clamp(40px,5.6vw,84px)] font-normal leading-[1.02] tracking-[-0.035em] text-white drop-shadow-md"
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] md:whitespace-nowrap">
          <motion.span
            className="block"
            variants={{
              hidden: { y: "110%" },
              show: { y: "0%", transition: { duration: 0.9, ease: [0.42, 0, 0, 1], delay: 0.08 * i } },
              exit: { y: "-110%", transition: { duration: 0.45, ease: [0.42, 0, 1, 1], delay: 0.05 * i } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}

const MOUNTAIN_BUS = "/mountain-bus.jpg";
const CLEAR_WATER_REVEAL = "https://cdn.jsdelivr.net/gh/rm-sjent/21st-assets@v1/img/hero-bright.jpg";

export function SlatShutterHero({
  coverSrc = MOUNTAIN_BUS,
  revealSrc = CLEAR_WATER_REVEAL,
  coverTitle = ["Leave the black sand", "before the light goes"],
  revealTitle = ["Then follow the sun", "south to clear water"],
  kicker = "Field notes, issue 14",
  caption = "Reynisfjara to the Calanques in eleven days, by ferry, train and one very small boat.",
  slats = 8,
  length = 2.5,
  className = "",
}) {
  const ref = React.useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });
  const [revealed, setRevealed] = React.useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => setRevealed(v > 0.42));

  const revealScale = useTransform(progress, [0.1, 0.85], [1.18, 1], { ease });
  const shade = useTransform(progress, [0, 0.5], [0.12, 0.0]);
  const capOpacity = useTransform(progress, [0.7, 0.85], [0, 1]);

  // Seamless cover base behind the slats:
  // Before scrolling, it fills 100% of the canvas seamlessly, ensuring no black background or seam lines can ever show through!
  const coverBaseOpacity = useTransform(progress, [0.06, 0.22], [1, 0]);

  if (reduce) {
    return (
      <section className={cn("relative h-svh w-full overflow-hidden bg-black", className)}>
        <img
          src={revealSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover contrast-[1.06] brightness-[1.04]"
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
          {kicker && <p className="mb-4 text-[15px] text-white/90 drop-shadow-sm">{kicker}</p>}
          <h1 className="text-[clamp(40px,5.6vw,84px)] font-normal leading-[1.02] tracking-[-0.035em] text-white drop-shadow-md">
            {revealTitle[0]}
            <br />
            {revealTitle[1]}
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className={cn("relative w-full bg-black", className)}
      style={{ height: `${length * 100}svh` }}
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        {/* Revealed image behind everything */}
        <motion.img
          src={revealSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover contrast-[1.06] brightness-[1.04]"
          style={{
            scale: revealScale,
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
        />

        {/* Seamless cover image layer behind the slats:
            This guarantees that any subpixel gap between slats is filled with the exact image pixels, 
            completely preventing any black lines from showing! */}
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center contrast-[1.06] brightness-[1.04]"
          style={{
            backgroundImage: `url("${coverSrc}")`,
            opacity: coverBaseOpacity,
          }}
        />

        {/* Slats (animated on scroll) */}
        <div className="absolute inset-0 flex overflow-hidden">
          {Array.from({ length: slats }).map((_, i) => (
            <Slat key={i} index={i} count={slats} progress={progress} src={coverSrc} />
          ))}
        </div>

        {/* Subtle shade for crystal clarity */}
        <motion.div className="pointer-events-none absolute inset-0 bg-black" style={{ opacity: shade }} />
        
        {/* Soft vignette at bottom just for headline legibility */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

        {/* copy */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-8 p-6 md:px-12 md:pb-12 z-20">
          <div className="min-w-0">
            {kicker && <p className="mb-4 text-[15px] text-white/90 font-medium drop-shadow-sm">{kicker}</p>}
            <AnimatePresence mode="wait" initial={false}>
              {revealed ? (
                <Headline key="r" lines={revealTitle} tone="reveal" />
              ) : (
                <Headline key="c" lines={coverTitle} tone="cover" />
              )}
            </AnimatePresence>
          </div>
          {caption && (
            <motion.p
              className="hidden max-w-[28ch] text-right text-[15px] leading-snug text-white/90 md:block font-normal drop-shadow-sm"
              style={{ opacity: capOpacity }}
            >
              {caption}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}

export default SlatShutterHero;
