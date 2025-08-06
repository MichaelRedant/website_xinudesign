import React from "react";

interface GlassPaneProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassPane({
  children,
  className = "",
}: GlassPaneProps) {
  return (
    <div
      className={`bg-white/30 backdrop-blur-md border border-white/40 rounded-md shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
