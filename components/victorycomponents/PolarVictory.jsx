import React, { useState, useEffect } from 'react';
import { VictoryChart, VictoryPolarAxis, VictoryBar, VictoryStack, VictoryLabel } from 'victory';
import _ from 'lodash';

const directions = {
  0: "RSI", 45: "MACD", 90: "ADX", 135: "DIV",
  180: "W", 225: "SW", 270: "S", 315: "SE"
};
const green = { base: "green", highlight: "darkGreen" };
const red = { base: "tomato", highlight: "orangeRed" };
const innerRadius = 10;

function CompassCenter(props) {
  const { origin } = props;
  const circleStyle = {
    stroke: red.base, strokeWidth: 2, fill: green.base
  };

  return (
    <g>
      <circle
        cx={origin.x} cy={origin.y} r={innerRadius} style={circleStyle}
      />
    </g>
  );
}

function CenterLabel(props) {
  const { datum, active, color } = props;

  // Avoid rendering if data is invalid (NaN values)
  if (!datum || typeof datum._x === 'undefined' || typeof datum._y1 === 'undefined' || isNaN(datum._x) || isNaN(datum._y1)) {
    return null;
  }

  const text = [`${directions[datum._x]}`, `${Math.round(datum._y1)} mph`];
  const baseStyle = { fill: color.highlight, textAnchor: "middle" };
  const style = [
    { ...baseStyle, fontSize: 38, fontWeight: "bold" },
    { ...baseStyle, fontSize: 32 }
  ];

  return active ? (
    <VictoryLabel
      text={text}
      style={style}
      x={175}
      y={175}
      renderInPortal
    />
  ) : null;
}

function getWindData() {
  return _.keys(directions).map((d) => {
    const speed = Math.floor(_.random() * 17) + 4;
    const windSpeed = isNaN(speed) ? 0 : speed; // Ensure windSpeed is a valid number
    return {
      windSpeed: windSpeed,
      windGust: windSpeed + _.random(2, 10),
      windBearing: +d
    };
  });
}

export default function PolarVictory() {
  const [state, setState] = useState({ wind: getWindData() });

  useEffect(() => {
    const setStateInterval = window.setInterval(() => {
      setState({ wind: getWindData() });
    }, 4000);

    return () => {
      window.clearInterval(setStateInterval);
    };
  }, []);

  return (
    <VictoryChart
      polar
      animate={{ duration: 500, onLoad: { duration: 500 } }}
      innerRadius={innerRadius}
      domainPadding={{ y: 10 }}
      height={500} // Adjust height
      width={500}  // Adjust width
      events={[{
        childName: "all",
        target: "data",
        eventHandlers: {
          onMouseOver: () => {
            return [
              { target: "labels", mutation: () => ({ active: true }) },
              { target: "data", mutation: () => ({ active: true }) }
            ];
          },
          onMouseOut: () => {
            return [
              { target: "labels", mutation: () => ({ active: false }) },
              { target: "data", mutation: () => ({ active: false }) }
            ];
          }
        }
      }]}
    >
      <VictoryPolarAxis
        dependentAxis
        labelPlacement="vertical"
        style={{
          axis: { stroke: "none" },  // Keep the actual axis hidden
          grid: { stroke: "none", strokeWidth: 1 }  // Customize the circular grid lines (axis)
        }}
        tickFormat={() => ""}

      />
      <VictoryPolarAxis
        labelPlacement="perpendicular"
        labelPadding={120}
        tickValues={_.keys(directions).map((k) => +k)}
        tickFormat={_.values(directions)}
        style={{
          tickLabels: {
            fontSize: 40, // Change font size here
            fill: 'gray', // Optional: Change the color of the labels
          },axis: { stroke: "gray", strokeWidth: 2 } // Customize the outer grid line
        }}
      />
      <VictoryStack>
        <VictoryBar
          style={{ data: { fill: ({ active }) => active ? green.highlight : green.base, width: 50 } }}
          data={state.wind || []} // Ensure data is not undefined
          x="windBearing"
          y={(d) => isNaN(d.windSpeed) ? 0 : d.windSpeed} // Fallback for invalid windSpeed
          labels={() => ""}
          labelComponent={<CenterLabel color={green} />}
        />
        <VictoryBar
          style={{ data: { fill: (d, a) => a ? red.highlight : red.base, width: 50 } }}
          data={state.wind || []}
          x="windBearing"
          y={(d) => isNaN(d.windGust) ? 0 : d.windGust - d.windSpeed} // Fallback for invalid windGust
          labels={() => ""}
          labelComponent={<CenterLabel color={red} />}
        />
      </VictoryStack>
      <CompassCenter origin={{ x: 175, y: 175 }} />
    </VictoryChart>
  );
}
