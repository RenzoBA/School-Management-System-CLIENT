"use client";

import { FC } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import { Pie } from "react-chartjs-2";
import { chartColors, chartColorsSoft } from "@/components/dashboard/constants";

interface PieChartProps {
  chartData: {
    labels: string[];
    data: number[];
  };
}

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: FC<PieChartProps> = ({ chartData }) => {
  const options: ChartOptions<"pie"> = {
    responsive: true,
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

  const data: ChartData<"pie"> = {
    labels: chartData.labels,
    datasets: [
      {
        data: chartData.data,
        backgroundColor: chartColorsSoft,
        hoverBackgroundColor: chartColors,
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="relative flex h-40 items-center justify-center">
      <Pie options={options} data={data} />
    </div>
  );
};

export default PieChart;
