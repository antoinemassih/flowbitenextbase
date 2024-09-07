import React from 'react';
import { Group } from '@visx/group';
import { Arc } from '@visx/shape';
import { scaleLinear, scaleBand } from '@visx/scale';
import { GradientPinkRed } from '@visx/gradient';

// Define the data for the bars
const data = [
  { label: 'A', value: 30 },
  { label: 'B', value: 70 },
  { label: 'C', value: 50 },
  { label: 'D', value: 80 },
  { label: 'E', value: 40 },
  { label: 'F', value: 60 },
];

// Constants for chart dimensions
const innerRadius = 60;
const outerRadius = 140;
const margin = { top: 40, bottom: 40, left: 40, right: 40 };

// Polar Bar Chart component
export default function PolarBarChart({ width, height }) {
  // Calculate the max radius for the chart
  const radius = Math.min(width, height) / 2 - Math.max(margin.top, margin.bottom);

  // Scales for the chart
  const angleScale = scaleBand({
    domain: data.map((d) => d.label),
    range: [0, 2 * Math.PI],
  });

  const radiusScale = scaleLinear({
    domain: [0, Math.max(...data.map((d) => d.value))],
    range: [innerRadius, radius],
  });

  // Center the chart inside the SVG
  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <svg width={width} height={height}>
      <GradientPinkRed id="visx-gradient" />
      <rect width={width} height={height} fill="url(#visx-gradient)" rx={14} />
      <Group top={centerY} left={centerX}>
        {data.map((d, i) => {
          const startAngle = angleScale(d.label);
          const endAngle = startAngle + angleScale.bandwidth();
          const arcPath = {
            startAngle,
            endAngle,
            innerRadius,
            outerRadius: radiusScale(d.value),
          };

          return (
            <Arc
              key={`arc-${i}`}
              {...arcPath}
              fill="rgba(93,30,91,0.8)"
              stroke="#ffffff"
              strokeWidth={2}
              cornerRadius={2}
              padAngle={0.01}
            />
          );
        })}
      </Group>
    </svg>
  );
}
