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
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const data: ChartData<"line"> = {
    labels: chartData.labels,
    datasets: [
      {
        data: chartData.data,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.5,
        pointRadius: 0,
      },
    ],
  };

  return <Line options={options} data={data} className="pl-5" />;
};

export default LineChart;
