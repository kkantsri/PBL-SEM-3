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
          "absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col justify-end p-5 sm:p-6 transition-all duration-300",
          hovered === index ? "opacity-100" : "opacity-90 md:opacity-75"
        )}
      >
        <div className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
          {card.title}
        </div>
        {card.subtitle && (
          <p className="text-xs sm:text-sm text-zinc-300 mt-1 font-medium">
            {card.subtitle}
          </p>
        )}

        {/* Fixed position of Pricing and Search Buses CTA */}
        <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between gap-2">
          {card.fare ? (
            <div>
              <span className="text-[10px] uppercase font-bold text-zinc-400 block tracking-wider">
                Starting Fare
              </span>
              <span className="text-emerald-400 font-extrabold text-lg sm:text-xl drop-shadow">
                {card.fare}
              </span>
            </div>
          ) : (
            <span className="text-xs text-zinc-400 font-medium">Scenic Transit</span>
          )}

          {card.onClick && (
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-600/30 transition group-hover:scale-105 shrink-0">
              <span>Search Buses</span>
              <ArrowRight size={13} />
            </div>
          )}
        </div>
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
