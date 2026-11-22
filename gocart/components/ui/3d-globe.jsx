"use client";

import React, { useEffect, useRef } from "react";

export function Globe3D({
  markers = [],
  config = {},
  onMarkerClick,
  onMarkerHover,
  className = "",
}) {
  const {
    atmosphereColor = "#4da6ff",
    atmosphereIntensity = 20,
    bumpScale = 5,
    autoRotateSpeed = 0.3,
    radiusScale = 1,
  } = config;

  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const rotationRef = useRef({ x: 0.22, y: 0 });
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const hoveredMarkerRef = useRef(null);
  const loadedImagesRef = useRef({});

  // Preload marker avatar images
  useEffect(() => {
    markers.forEach((m) => {
      if (m.src && !loadedImagesRef.current[m.src]) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = m.src;
        img.onload = () => {
          loadedImagesRef.current[m.src] = img;
        };
      }
    });
  }, [markers]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let width = 800;
    let height = 800;

    const resize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = Math.round(rect.width || window.innerWidth || 800);
      height = Math.round(rect.height || window.innerHeight || 800);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Pre-generate background starfield covering the full viewport
    const STAR_COUNT = 140;
    const stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 1.6 + 0.4,
        baseAlpha: Math.random() * 0.6 + 0.15,
        twinkleSpeed: Math.random() * 1.5 + 0.5,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }

    // Pre-generate Fibonacci dots on sphere (dense for whole-page coverage)
    const DOT_COUNT = 1500;
    const dots = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    for (let i = 0; i < DOT_COUNT; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / DOT_COUNT);
      dots.push({
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.cos(phi),
        z: Math.sin(theta) * Math.sin(phi),
      });
    }

    let lastTime = performance.now();

    const render = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Auto rotation
      if (!isDraggingRef.current) {
        rotationRef.current.y += autoRotateSpeed * dt;
      }

      ctx.clearRect(0, 0, width, height);

      // 0. Render subtle cosmic starfield across the full canvas
      ctx.save();
      for (let i = 0; i < STAR_COUNT; i++) {
        const star = stars[i];
        const tw = 0.5 + 0.5 * Math.sin(now * 0.002 * star.twinkleSpeed + star.twinkleOffset);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.baseAlpha * tw * 0.7})`;
        ctx.beginPath();
        ctx.arc(star.x * width, star.y * height, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      const cx = width / 2;
      const cy = height / 2;

      // Sphere radius configured to cover the whole page dynamically
      const minDim = Math.min(width, height);
      const maxDim = Math.max(width, height);
      const baseRadius = Math.max(minDim * 0.56, maxDim * 0.40);
      const radius = baseRadius * radiusScale;

      const rotY = rotationRef.current.y;
      const rotX = rotationRef.current.x;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // 1. Atmosphere outer glow (spanning outwards to fill page edges)
      const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.85, cx, cy, radius * 1.36);
      glowGrad.addColorStop(0, `${atmosphereColor}35`);
      glowGrad.addColorStop(0.4, `${atmosphereColor}18`);
      glowGrad.addColorStop(0.8, `${atmosphereColor}08`);
      glowGrad.addColorStop(1, "transparent");

      ctx.save();
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.36, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 2. Globe dark sphere body
      const sphereGrad = ctx.createRadialGradient(
        cx - radius * 0.35,
        cy - radius * 0.35,
        radius * 0.1,
        cx,
        cy,
        radius
      );
      sphereGrad.addColorStop(0, "#101628");
      sphereGrad.addColorStop(0.6, "#080c16");
      sphereGrad.addColorStop(1, "#020306");

      ctx.save();
      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // Thin crisp globe rim outline
      ctx.strokeStyle = `${atmosphereColor}60`;
      ctx.lineWidth = 1.4;
      ctx.stroke();
      ctx.restore();

      // 3. Render Fibonacci Sphere Dots
      ctx.save();
      for (let i = 0; i < DOT_COUNT; i++) {
        const dot = dots[i];
        // Rotate Y
        const x1 = dot.x * cosY - dot.z * sinY;
        const z1 = dot.x * sinY + dot.z * cosY;
        // Rotate X
        const y2 = dot.y * cosX - z1 * sinX;
        const z2 = dot.y * sinX + z1 * cosX;

        if (z2 > -0.12) {
          const px = cx + x1 * radius;
          const py = cy + y2 * radius;
          const alpha = Math.max(0.12, (z2 + 0.12) * 0.88);
          const size = Math.max(1, (z2 + 1) * 1.45);

          ctx.fillStyle = `${atmosphereColor}${Math.floor(alpha * 255)
            .toString(16)
            .padStart(2, "0")}`;
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();

      // 4. Render City Markers
      const renderedMarkers = [];
      markers.forEach((m) => {
        const latRad = (m.lat * Math.PI) / 180;
        const lngRad = (m.lng * Math.PI) / 180;

        // Base 3D coordinates
        const mx = Math.cos(latRad) * Math.sin(lngRad);
        const my = -Math.sin(latRad);
        const mz = Math.cos(latRad) * Math.cos(lngRad);

        // Rotate Y
        const mx1 = mx * cosY - mz * sinY;
        const mz1 = mx * sinY + mz * cosY;
        // Rotate X
        const my2 = my * cosX - mz1 * sinX;
        const mz2 = my * sinX + mz1 * cosX;

        if (mz2 > 0.04) {
          const px = cx + mx1 * radius;
          const py = cy + my2 * radius;
          renderedMarkers.push({ ...m, px, py, mz: mz2 });
        }
      });

      // Sort by depth (back to front)
      renderedMarkers.sort((a, b) => a.mz - b.mz);

      renderedMarkers.forEach((m) => {
        const isHovered = hoveredMarkerRef.current?.label === m.label;
        const scale = (m.mz + 0.3) * 1.1;
        const markerSize = isHovered ? 30 : Math.max(22, 26 * scale);

        // Pulsing radar ring
        const pulse = (Math.sin(now * 0.004 + m.lat) + 1) / 2;
        ctx.save();
        ctx.strokeStyle = `${atmosphereColor}${Math.floor((1 - pulse * 0.6) * 200)
          .toString(16)
          .padStart(2, "0")}`;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.arc(m.px, m.py, markerSize * 0.5 + pulse * 7, 0, Math.PI * 2);
        ctx.stroke();

        // Marker Avatar Image or glowing dot
        const img = m.src ? loadedImagesRef.current[m.src] : null;
        if (img && img.complete && img.naturalWidth > 0) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(m.px, m.py, markerSize / 2, 0, Math.PI * 2);
          ctx.clip();
          ctx.drawImage(img, m.px - markerSize / 2, m.py - markerSize / 2, markerSize, markerSize);
          ctx.restore();

          // Border ring around avatar
          ctx.strokeStyle = isHovered ? "#ffffff" : atmosphereColor;
          ctx.lineWidth = isHovered ? 2.5 : 1.8;
          ctx.beginPath();
          ctx.arc(m.px, m.py, markerSize / 2, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          ctx.fillStyle = isHovered ? "#ffffff" : atmosphereColor;
          ctx.beginPath();
          ctx.arc(m.px, m.py, isHovered ? 7 : 5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Marker Label Pill (hovered or near front)
        if (isHovered || m.mz > 0.55) {
          const labelText = m.label;
          ctx.font = "bold 11px system-ui, -apple-system, sans-serif";
          const textWidth = ctx.measureText(labelText).width;
          const pillW = textWidth + 16;
          const pillH = 22;
          const pillX = m.px - pillW / 2;
          const pillY = m.py - markerSize / 2 - 26;

          ctx.fillStyle = "rgba(4, 6, 14, 0.82)";
          ctx.strokeStyle = isHovered ? atmosphereColor : "rgba(255, 255, 255, 0.25)";
          ctx.lineWidth = 1;

          ctx.beginPath();
          ctx.roundRect(pillX, pillY, pillW, pillH, 999);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = isHovered ? "#ffffff" : "rgba(255, 255, 255, 0.95)";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(labelText, m.px, pillY + pillH / 2);
        }

        ctx.restore();
      });

      canvas._renderedMarkers = renderedMarkers;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [markers, atmosphereColor, atmosphereIntensity, bumpScale, autoRotateSpeed, radiusScale]);

  // Pointer interactions for dragging and marker clicking
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (isDraggingRef.current) {
      const dx = e.clientX - lastMouseRef.current.x;
      const dy = e.clientY - lastMouseRef.current.y;
      rotationRef.current.y += dx * 0.005;
      rotationRef.current.x = Math.max(-1.25, Math.min(1.25, rotationRef.current.x + dy * 0.005));
      lastMouseRef.current = { x: e.clientX, y: e.clientY };
    }

    // Check hover over markers
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rendered = canvas._renderedMarkers || [];
    let found = null;
    for (let i = rendered.length - 1; i >= 0; i--) {
      const m = rendered[i];
      const dist = Math.hypot(m.px - mouseX, m.py - mouseY);
      if (dist < 26) {
        found = m;
        break;
      }
    }

    if (found?.label !== hoveredMarkerRef.current?.label) {
      hoveredMarkerRef.current = found;
      if (onMarkerHover) {
        onMarkerHover(found);
      }
    }
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handleClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rendered = canvas._renderedMarkers || [];
    for (let i = rendered.length - 1; i >= 0; i--) {
      const m = rendered[i];
      const dist = Math.hypot(m.px - mouseX, m.py - mouseY);
      if (dist < 26) {
        if (onMarkerClick) onMarkerClick(m);
        break;
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center select-none w-full h-full ${className}`}
      style={{ touchAction: "none" }}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onClick={handleClick}
        className="cursor-grab active:cursor-grabbing w-full h-full block"
      />
    </div>
  );
}

export default Globe3D;
