import React from 'react';
import { Arc } from '@visx/shape';

const Gauge = ({ width = 300, height = 300, ringValues = [0.7, 0.5, 0.3] }) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 2;

  // Ring parameters
  const ringWidths = [30, 20, 10]; // Thickness of each ring
  const ringColors = ['#34D399', '#60A5FA', '#FBBF24']; // Colors of each ring

  return (
    <svg width={width} height={height}>
      {ringValues.map((value, i) => {
        const outerRadius = radius - i * (ringWidths[i] + 10); // Increase the gap between rings
        const innerRadius = outerRadius - ringWidths[i]; // Make innerRadius smaller by the width of the ring

        return (
          <g key={i} transform={`translate(${centerX},${centerY})`}>
            {/* Background Arc (full circle) */}
            <Arc
              startAngle={0}
              endAngle={Math.PI * 2}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              fill="#E5E7EB" // Background color (gray)
            />
            {/* Foreground Arc */}
            <Arc
              startAngle={0}
              endAngle={value * Math.PI * 2} // Static value-based arc
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              fill={ringColors[i]} // Foreground color (based on ring index)
            />
          </g>
        );
      })}
    </svg>
  );
};

export default Gauge;
