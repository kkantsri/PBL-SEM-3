"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export function BorderBeam({
  children,
  className = "",
  size = "line",
  colorVariant = "colorful",
  duration = 3.1,
  borderRadius = 20,
  borderWidth = 1.5,
  style = {},
}) {
  const gradient =
    colorVariant === "colorful"
      ? "conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 66%, #ff007a 74%, #7928ca 82%, #38bdf8 90%, #00f0ff 96%, transparent 100%)"
      : "conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 75%, #60a5fa 92%, #3b82f6 100%)";

  return (
    <div
      className={`relative inline-block overflow-hidden ${className}`}
      style={{
        borderRadius: `${borderRadius}px`,
        padding: `${borderWidth}px`,
        ...style,
      }}
    >
      {/* Animated rotating border beam */}
      <div
        className="absolute -inset-[150%] animate-[spin_var(--beam-duration)_linear_infinite] pointer-events-none will-change-transform"
        style={{
          "--beam-duration": `${duration}s`,
          background: gradient,
        }}
      />
      {/* Inner container */}
      <div
        className="relative z-10 w-full h-full"
        style={{
          borderRadius: `${Math.max(0, borderRadius - borderWidth)}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ opacity: 0.4, flexShrink: 0 }}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function SearchBar({
  placeholder = "Search",
  onSearch,
  className = "",
  width = 366,
}) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    } else if (query.trim()) {
      router.push(`/shop?to=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: typeof width === "number" ? width : undefined,
        maxWidth: "100%",
        height: 42,
        borderRadius: 64,
        overflow: "hidden",
        position: "relative",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
      className={className}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 20,
          background: "#1d1d1d",
          boxShadow:
            "inset 0 0 0 1px rgba(44,47,54,0.52), inset 0 0 50px 0 rgba(255,255,255,0.02)",
          display: "flex",
          alignItems: "center",
          padding: "0 13px",
          gap: 10,
          color: "#565656",
        }}
      >
        <SearchIcon />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-[15px] leading-[18px] text-zinc-100 placeholder-[#565656] font-normal"
        />
      </div>
    </form>
  );
}

export default function Default() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 600,
        maxWidth: "100%",
        minHeight: 360,
        margin: "0 auto",
        background: "#0d0d0f",
        borderRadius: 24,
      }}
    >
      <BorderBeam size="line" colorVariant="colorful" duration={3.1} borderRadius={20}>
        <SearchBar />
      </BorderBeam>
    </div>
  );
}
