"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative rounded-2xl overflow-hidden h-64 md:h-96 w-full transition-all duration-300 ease-out border border-white/15 shadow-xl bg-black/40 backdrop-blur-sm",
        hovered !== null && hovered !== index && "blur-[3px] scale-[0.98] opacity-50"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full transition-transform duration-500 ease-out"
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex items-end p-6 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0 md:opacity-30"
        )}
      >
        <div className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
          {card.title}
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
          key={card.title}
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
