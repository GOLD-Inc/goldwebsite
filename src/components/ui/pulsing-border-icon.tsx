"use client";

import { useId } from "react";
import { PulsingBorder } from "@paper-design/shaders-react";

const DARK_COLORS = [
  "#f4d03f", // gold
  "#065b64", // teal
  "#1e3a5f", // navy
  "#5b21b6", // dark violet
  "#9a3412", // deep amber
  "#b8860b", // dark goldenrod
  "#0891b2", // cyan
  "#034d52", // dark teal
];

interface PulsingBorderIconProps {
  text?: string;
  className?: string;
  size?: number;
}

export function PulsingBorderIcon({
  text = "Health for Every Body by Gold Health",
  className,
  size = 100,
}: PulsingBorderIconProps) {
  const circleId = useId().replace(/:/g, "");

  return (
    <div
      className={`relative flex items-center justify-center ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      <PulsingBorder
        colors={DARK_COLORS}
        colorBack="#00000000"
        speed={1.0}
        roundness={1}
        thickness={0.1}
        softness={0.2}
        intensity={5}
        spotSize={0.1}
        pulse={0.1}
        smoke={0.5}
        smokeSize={4}
        scale={0.65}
        rotation={0}
        frame={9161408.251009725}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full animate-spin"
        viewBox="0 0 100 100"
        style={{ transform: "scale(1.6)", animationDuration: "20s" }}
      >
        <defs>
          <path
            id={`circle-${circleId}`}
            d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
      </svg>
    </div>
  );
}
