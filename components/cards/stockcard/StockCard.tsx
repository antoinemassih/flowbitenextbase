import React from "react";
import PolarVictory from "../../victorycomponents/PolarVictory.jsx"

export default function StockCard(){
  return (
    <div className="max-w-xs rounded-lg border border-gray-200 bg-white p-6 text-center shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="h-64 w-full">
        <PolarVictory />
      </div>

      <h3 className="mb-2 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        <div>
          <span>NVDA</span> <span>121</span>
        </div>
        <div>
          <span className="pl-2 pr-2 font-medium text-blue-500">(+12%)</span>
        </div>
      </h3>

      <p className="mb-3 py-3 text-center font-normal text-gray-700 dark:text-gray-400">
        This is
      </p>
      <a
        href="#"
        className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
}