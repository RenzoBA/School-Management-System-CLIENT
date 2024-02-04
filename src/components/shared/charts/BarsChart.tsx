"use client";

import { chartColors, chartColorsSoft } from "@/components/dashboard/constants";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import { FC } from "react";
import { Bar } from "react-chartjs-2";

interface BarsChartProps {
  chartData: {
    labels: string[];
    data: number[];
  };
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarsChart: FC<BarsChartProps> = ({ chartData }) => {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: "#9699A6",
        },
        border: {
          display: false,
        },
      },
      y: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: "#9699A6",
        },
        border: {
          display: false,
        },
      },
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

  const data: ChartData<"bar"> = {
    labels: chartData.labels,
    datasets: [
      {
        data: chartData.data,
        backgroundColor: chartColorsSoft[0],
        hoverBackgroundColor: chartColors[0],
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  return (
    <div className="relative h-32 w-[450px]">
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarsChart;
