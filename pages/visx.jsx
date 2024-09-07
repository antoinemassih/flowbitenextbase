import React from 'react';

import BarGraph from "../components/BarGraph.jsx";
import CandlestickChart from "../components/CandlestickChart.jsx";
import Gauge from "../components/Gauge.jsx";
import BurstChart from "../components/BurstChart.jsx";
import StreamGraph from "../components/StreamGraph.jsx";
import PolarBarChart from "../components/PolarBarChart.jsx";
import PolarVictory from "../components/victorycomponents/PolarVictory.jsx";

export default function visx() {
  const data = {
    name: 'root',
    children: [
      {
        name: 'Level 1 - Category 1',
        children: [
          {
            name: 'Level 2 - Subcategory 1.1',
            children: [
              { name: 'Level 3 - Item 1.1.1', value: 30 },
              { name: 'Level 3 - Item 1.1.2', value: 20 },
            ],
          },
          {
            name: 'Level 2 - Subcategory 1.2',
            children: [
              { name: 'Level 3 - Item 1.2.1', value: 10 },
              { name: 'Level 3 - Item 1.2.2', value: 40 },
            ],
          },
        ],
      },
      {
        name: 'Level 1 - Category 2',
        children: [
          {
            name: 'Level 2 - Subcategory 2.1',
            children: [
              { name: 'Level 3 - Item 2.1.1', value: 25 },
              { name: 'Level 3 - Item 2.1.2', value: 35 },
            ],
          },
          {
            name: 'Level 2 - Subcategory 2.2',
            children: [
              { name: 'Level 3 - Item 2.2.1', value: 15 },
              { name: 'Level 3 - Item 2.2.2', value: 45 },
            ],
          },
        ],
      },
    ],
  };




  return (
    <div className="container">
      <BarGraph></BarGraph>
      <BurstChart width={500} height={500} data={data} />
      <Gauge></Gauge>
      <div style={{ width: '100%', height: '500px' }}>
        <StreamGraph width={800} height={500} animate={true} />
      </div>
      <div style={{ width: '100%', height: '500px' }}>
        <PolarBarChart width={500} height={500} />
      </div>
      <div>
        <h1>Polar Wind Graph</h1>
        <PolarVictory />
      </div>
    </div>
  );
}
