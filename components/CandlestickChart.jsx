import React from 'react';
import { scaleBand, scaleLinear } from '@visx/scale';
import { Group } from '@visx/group';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { Bar } from '@visx/shape';
import { max, min } from 'd3-array';
import { animated, useSpring } from '@react-spring/web';

const data = [
  { date: '2023-09-01', open: 50, high: 80, low: 45, close: 70 },
  { date: '2023-09-02', open: 70, high: 90, low: 60, close: 85 },
  { date: '2023-09-03', open: 85, high: 95, low: 70, close: 75 },
  { date: '2023-09-04', open: 75, high: 85, low: 60, close: 65 },
];

const CandlestickChart = ({ width = 600, height = 400 }) => {
  const margin = { top: 20, right: 20, bottom: 50, left: 50 };
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // Scales
  const xScale = scaleBand({
    range: [0, xMax],
    domain: data.map((d) => d.date),
    padding: 0.2,
  });

  const yScale = scaleLinear({
    range: [yMax, 0],
    domain: [min(data, (d) => d.low) - 10, max(data, (d) => d.high) + 10],
  });

  return (
    <svg width={width} height={height}>
      <Group top={margin.top} left={margin.left}>
        {/* X Axis */}
        <AxisBottom scale={xScale} top={yMax} />
        {/* Y Axis */}
        <AxisLeft scale={yScale} />
        {/* Animated Candlesticks */}
        {data.map((d, i) => {
          const barWidth = xScale.bandwidth();
          const barX = xScale(d.date);
          const openY = yScale(d.open);
          const closeY = yScale(d.close);
          const highY = yScale(d.high);
          const lowY = yScale(d.low);
          const candleColor = d.open > d.close ? 'red' : 'green';

          // Individual animation for each candlestick
          const { opacity, height } = useSpring({
            from: { opacity: 0, height: 0 },
            to: { opacity: 1, height: 1 },
            delay: i * 100, // Delay for staggered animation
            config: { tension: 200, friction: 20 },
          });

          return (
            <Group key={`candle-${i}`}>
              {/* Animated High-Low Line */}
              <animated.line
                x1={barX + barWidth / 2}
                x2={barX + barWidth / 2}
                y1={highY}
                y2={lowY}
                stroke="black"
                style={{ opacity }}
              />
              {/* Animated Candlestick */}
              <animated.rect
                x={barX}
                y={Math.min(openY, closeY)}
                width={barWidth}
                height={height.to((h) => Math.abs(closeY - openY) * h)}
                fill={candleColor}
                style={{ opacity }}
              />
            </Group>
          );
        })}
      </Group>
    </svg>
  );
};

export default CandlestickChart;
