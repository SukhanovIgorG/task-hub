export interface ITimeRange {
  label: string;
  type: "year" | "month" | "day";
}

export interface IChartDataPoint {
  name: string;
  uv: number;
  pv?: number;
  amt?: number;
}
