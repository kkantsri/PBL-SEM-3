"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Bus } from "lucide-react";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }) => (
    <div
      onClick={card.onClick}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative rounded-2xl overflow-hidden h-64 md:h-96 w-full transition-all duration-300 ease-out border border-white/15 shadow-xl bg-black/40 backdrop-blur-sm group",
        card.onClick && "cursor-pointer",
        hovered !== null && hovered !== index && "blur-[3px] scale-[0.98] opacity-50"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
      />
      
      {/* Category / Route Badge if provided */}
      {card.badge && (
        <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/20 flex items-center gap-1.5 shadow-sm">
          <Bus size={13} className="text-blue-400" />
          <span>{card.badge}</span>
        </div>
      )}

      {/* Overlay & Text Details */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0 md:opacity-40"
        )}
      >
        <div className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
          {card.title}
        </div>
        {card.subtitle && (
          <div className="text-xs sm:text-sm text-zinc-300 mt-1 font-medium flex items-center justify-between">
            <span>{card.subtitle}</span>
            {card.fare && (
              <span className="text-emerald-400 font-bold text-base">
                {card.fare}
              </span>
            )}
          </div>
        )}
        {card.onClick && (
          <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-blue-400 group-hover:text-blue-300 transition">
            <span>Book Seat</span>
            <ArrowRight size={13} />
          </div>
        )}
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto w-full">
      {cards.map((card, index) => (
        <Card
          key={`${card.title}_${index}`}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

export default FocusCards;
