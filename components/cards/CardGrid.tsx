import React, { FC } from "react";
import { Badge, Card, CardProps } from "flowbite-react";

const CardExample: FC = function () {
  return (
    <div className="max-w-xs">
      <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="/image-1.jpg"
            className="round"
      >
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge color="info" size="sm">
              Info
            </Badge>
            <Badge color="gray" size="sm">
              Gray
            </Badge>
            <Badge color="failure" size="sm">
              Failure
            </Badge>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default function CardGrid() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
      <div className="p-4">
        <CardExample />
      </div>
      <div className="p-4">
        <CardExample />
      </div>
      <div className="p-4">
        <CardExample />
      </div>
      <div className="p-4">
        <CardExample />
      </div>
      <div className="p-4">
        <CardExample />
      </div>
      <div className="p-4">
        <CardExample />
      </div>
    </div>
  );
};