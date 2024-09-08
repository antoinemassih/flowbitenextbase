import React, { FC } from "react";
import { Button, Tooltip } from "flowbite-react";

export default function MyTooltip() {
  return (
    <TooltipsExample/>
  );
};

const TooltipsExample: FC = function () {
  return (
    <div className="flex gap-2">
      <Tooltip content="Tooltip content" placement="top">
        <Button>Tooltip top</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="right">
        <Button>Tooltip right</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="bottom">
        <Button>Tooltip bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="left">
        <Button>Tooltip left</Button>
      </Tooltip>
    </div>
  );
};