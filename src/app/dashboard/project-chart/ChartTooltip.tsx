export interface IChartTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
  }>;
}

export const ChartTooltip = ({ active, payload }: IChartTooltipProps) => {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-violet-500 px-2 py-1 border border-neutral-200 rounded-full text-white text-sm">
      {`${payload[0].value} projects`}
    </div>
  );
};
