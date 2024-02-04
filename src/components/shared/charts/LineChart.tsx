"use client";

import { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";

interface LineChartProps {
  chartData: {
    labels: string[];
    data: number[];
    colors: {
      base: string;
      soft: string;
    };
  };
}

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Legend
);

const LineChart: FC<LineChartProps> = ({ chartData }) => {
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgb(0, 0, 0)",
        titleAlign: "center",
        caretSize: 0,
        padding: 8,
        titleFont: { size: 14 },
        bodyFont: { size: 14 },
      },
    },
  };

  const data: ChartData<"line"> = {
    labels: chartData.labels,
    datasets: [
      {
        data: chartData.data,
        borderColor: chartData.colors.soft,
        hoverBorderColor: chartData.colors.base,
        backgroundColor: chartData.colors.soft,
        tension: 0.4,
        pointRadius: 2,
      },
    ],
  };

  return (
    <div className="relative h-28 w-60">
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
