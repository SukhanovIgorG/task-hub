"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { ITimeRange } from "./project-chart.types";
import { Chart } from "./Chart";
import {
  CHART_MOTHS_DATA,
  CHART_YEAR_DATA,
  CHART_DAY_DATA,
} from "./project-chart.data";

const chartVariant: ITimeRange["type"][] = ["year", "month", "day"];

const dataDict = {
  year: CHART_YEAR_DATA,
  month: CHART_MOTHS_DATA,
  day: CHART_DAY_DATA,
};

export const ProjectChart = () => {
  const [type, setType] = useState<ITimeRange["type"]>("year");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleClick = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  const handleChange = (value: ITimeRange["type"]) => {
    setType(value);
    setIsDropDownOpen(false);
  };

  return (
    <div className="flex flex-col h-full gap-2">
      <div className="flex justify-between items-center relative ">
        <h2 className="text-xl font-semibold">Project Statistic</h2>
        <button
          onClick={handleClick}
          type="button"
          className="
          flex border border-neutral-200 rounded-full items-center gap-2 py-1 px-2 text-sm capitalize
          hover:bg-neutral-100 hover:text-primary
          active:bg-neutral-200"
        >
          {type} <ChevronDown />
        </button>
        {isDropDownOpen && (
          <div
            className="absolute top-10 right-0 flex flex-col gap-1 z-40
          bg-white shadow-lg rounded-md p-2 border border-neutral-200
          "
          >
            {chartVariant.map((item) => (
              <button
                key={item}
                onClick={() => handleChange(item)}
                type="button"
                className="
                flex border-none items-center gap-2 py-1 px-2 text-sm capitalize
                hover:text-primary active:bg-neutral-200"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
      <Chart data={dataDict[type]} />
    </div>
  );
};
