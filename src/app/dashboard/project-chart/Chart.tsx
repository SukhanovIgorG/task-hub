import { useMemo } from "react";
import { ChartTooltip } from "./ChartTooltip";
import type { IChartDataPoint } from "./project-chart.types";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface IChartProps {
  data: IChartDataPoint[];
}

export const Chart = ({ data }: IChartProps) => {
  const maxData: IChartDataPoint = useMemo(() => {
    let maxPoint = { name: "", uv: 0 };
    data.forEach((point) => {
      if (point.uv > maxPoint.uv) {
        maxPoint = point;
      }
    });
    return maxPoint;
  }, [data]);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 20,
          left: -20,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient
            id="colorGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="0 3" stroke="#ccc" vertical={false} />
        <XAxis
          dataKey="name"
          tick={{ fontSize: 12, fill: "#666" }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fontSize: 12, fill: "#666" }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<ChartTooltip />} />
        {maxData && (
          <ReferenceLine
            x={maxData.name}
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
        )}
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          strokeWidth={2}
          fillOpacity={0.3}
          fill="#8884d8"
          // fill="url(#colorGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
