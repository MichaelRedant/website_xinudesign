import React from "react";
import { motion } from "motion/react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.4;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const letters = [
  "M10 10 L40 80 M40 10 L10 80",
  "M60 10 L60 80",
  "M80 80 L80 10 L110 80 L110 10",
  "M130 10 L130 60 Q130 80 150 80 Q170 80 170 60 L170 10",
  "M190 80 L190 10 L210 10 Q230 10 230 30 Q230 50 210 50 L190 50",
  "M240 80 L240 10 L270 10 M240 45 L260 45 M240 80 L270 80",
  "M290 20 Q290 10 310 10 Q330 10 330 20 Q330 30 310 30 Q290 30 290 40 Q290 50 310 50 Q330 50 330 60 Q330 70 310 70 Q290 70 290 60",
  "M350 10 L350 80",
  "M370 40 Q370 10 400 10 Q430 10 430 40 Q430 70 400 70 Q380 70 380 50 L400 50",
  "M450 80 L450 10 L480 80 L480 10",
];

const colors = ["#ff0088", "#8df0cc", "#0d63f8"];

const shape: React.CSSProperties = {
  strokeWidth: 6,
  strokeLinecap: "round",
  fill: "transparent",
};

export default function PathDrawing() {
  return (
    <motion.svg
      width="600"
      height="120"
      viewBox="0 0 500 100"
      initial="hidden"
      animate="visible"
      style={{ maxWidth: "90vw" }}
      className="mx-auto mb-6"
    >
      {letters.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke={colors[i % colors.length]}
          variants={draw}
          custom={i + 1}
          style={shape}
        />
      ))}
    </motion.svg>
  );
}
