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
import { chartColors, chartColorsSoft } from "@/components/dashboard/constants";

interface TwoLinesChartProps {
  chartData: {
    labels: string[];
    lines: {
      label: string;
      data: number[];
    }[];
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

const TwoLinesChart: FC<TwoLinesChartProps> = ({ chartData }) => {
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    color: "#9699A6",
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
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: {
      legend: {
        display: true,
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
    datasets: chartData.lines.map((line, i) => ({
      data: line.data,
      label: line.label,
      borderColor: chartColorsSoft[i],
      hoverBorderColor: chartColors[i],
      backgroundColor: chartColorsSoft[i],
      tension: 0.4,
      pointRadius: 2,
    })),
  };

  return (
    <div className="relative h-44 w-full">
      <Line options={options} data={data} />
    </div>
  );
};

export default TwoLinesChart;
