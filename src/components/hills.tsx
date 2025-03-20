import React from 'react';

interface HillsLineProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const HillsLine: React.FC<HillsLineProps> = ({
  width = 800,
  height = 200,
  color = "#4CAF50",
  className = ""
}) => {
  // Create a smooth, wavy line to represent hills
  // Using bezier curves for a natural look
  const path = `
    M0,${height * 0.6}
    C${width * 0.1},${height * 0.4} ${width * 0.2},${height * 0.5} ${width * 0.3},${height * 0.6}
    C${width * 0.4},${height * 0.7} ${width * 0.5},${height * 0.8} ${width * 0.6},${height * 0.5}
    C${width * 0.7},${height * 0.3} ${width * 0.8},${height * 0.4} ${width * 0.9},${height * 0.6}
    C${width * 0.95},${height * 0.7} ${width},${height * 0.6} ${width},${height * 0.6}
    L${width},${height}
    L0,${height}
    Z
  `;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d={path}
        fill={color}
        stroke="none"
      />
    </svg>
  );
};

export default HillsLine;