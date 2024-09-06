import React, { useEffect, useState } from 'react';
import { Arc } from '@visx/shape';
import { Group } from '@visx/group';
import { hierarchy, partition } from 'd3-hierarchy';
import { interpolateRainbow } from 'd3-scale-chromatic';
import { scaleLinear } from '@visx/scale';
import { useSprings, animated } from '@react-spring/web'; // Import react-spring for animations

const AnimatedArc = animated(Arc);

const BurstChart = ({ width = 400, height = 400, data }) => {
  const radius = Math.min(width, height) / 2;

  // Partition layout generator
  const partitionLayout = partition()
    .size([2 * Math.PI, radius])
    .padding(0);

  // Create hierarchy data structure from input data
  const root = hierarchy(data)
    .sum((d) => d.value)
    .sort((a, b) => b.value - a.value);

  const partitionedData = partitionLayout(root).descendants();

  // Only proceed if partitionedData exists and has data
  if (!partitionedData || partitionedData.length === 0) return null;

  // Color scale
  const colorScale = scaleLinear({
    domain: [0, root.height],
    range: [0, 1],
  });

  // Use `useSprings` for animating multiple arcs at once
  const [springs, api] = useSprings(partitionedData.length, (index) => ({
    from: {
      startAngle: 0,
      endAngle: 0,
      innerRadius: 0,
      outerRadius: 0,
    },
    to: (index) => ({
      startAngle: partitionedData[index]?.x0 ?? 0,  // Use nullish coalescing operator to provide default value
      endAngle: partitionedData[index]?.x1 ?? 0,
      innerRadius: partitionedData[index]?.y0 ?? 0,
      outerRadius: partitionedData[index]?.y1 ?? 0,
    }),
    delay: index * 100, // Stagger the animations
    config: { tension: 120, friction: 14 },
  }));

  useEffect(() => {
    // Update the springs when partitionedData changes
    api.start((index) => ({
      startAngle: partitionedData[index]?.x0 ?? 0,
      endAngle: partitionedData[index]?.x1 ?? 0,
      innerRadius: partitionedData[index]?.y0 ?? 0,
      outerRadius: partitionedData[index]?.y1 ?? 0,
      delay: index * 100,
    }));
  }, [partitionedData, api]);

  return (
    <svg width={width} height={height}>
      <Group top={height / 2} left={width / 2}>
        {springs.map((props, i) => (
          <AnimatedArc
            key={i}
            startAngle={props.startAngle}
            endAngle={props.endAngle}
            innerRadius={props.innerRadius}
            outerRadius={props.outerRadius}
            fill={interpolateRainbow(colorScale(partitionedData[i]?.depth ?? 0))}
            padAngle={0.01}
          />
        ))}
      </Group>
    </svg>
  );
};

export default BurstChart;
