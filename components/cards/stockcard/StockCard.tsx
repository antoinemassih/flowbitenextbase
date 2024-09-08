import React from "react";
import PolarVictory from "../../victorycomponents/PolarVictory.jsx"
import AvatarStack from "@/components/avatars/avatarStack/AvatarStack";

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
      <AvatarStack/>
    </div>
  );
}