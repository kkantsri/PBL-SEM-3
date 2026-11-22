"use client";

import React from "react";

export function BorderBeam({
  children,
  className = "",
  duration = 3.5,
  borderWidth = 1.5,
  borderRadius = 64,
  colorVariant = "colorful",
  size = "line",
  style = {},
}) {
  const gradient =
    colorVariant === "colorful"
      ? "conic-gradient(from 0deg, transparent 0%, transparent 68%, #38bdf8 82%, #818cf8 90%, #c084fc 95%, #f472b6 99%, #38bdf8 100%)"
      : "conic-gradient(from 0deg, transparent 0%, transparent 75%, #60a5fa 92%, #3b82f6 100%)";

  return (
    <div
      className={`relative overflow-hidden group ${className}`}
      style={{
        borderRadius,
        padding: `${borderWidth}px`,
        ...style,
      }}
    >
      {/* Rotating ray of light */}
      <div
        className="absolute inset-[-150%] animate-[spin_var(--beam-duration)_linear_infinite] pointer-events-none will-change-transform"
        style={{
          "--beam-duration": `${duration}s`,
          background: gradient,
        }}
      />
      {/* Inner container */}
      <div
        className="relative w-full h-full"
        style={{ borderRadius: Math.max(0, borderRadius - borderWidth) }}
      >
        {children}
      </div>
    </div>
  );
}

export default BorderBeam;
