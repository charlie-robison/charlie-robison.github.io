"use client";

import { useRef, useState } from "react";

export default function GlowCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      className={`glow-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        "--glow-x": `${glowPos.x}px`,
        "--glow-y": `${glowPos.y}px`,
        "--glow-opacity": isHovering ? 1 : 0,
      }}
    >
      <div className="glow-card-border" />
      <div className="glow-card-content">{children}</div>
    </div>
  );
}
