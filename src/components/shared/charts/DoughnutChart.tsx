"use client";

import { FC } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { chartColors, chartColorsSoft } from "@/components/dashboard/constants";

interface DoughnutChartProps {
  chartData: {
    labels: string[];
    data: number[];
  };
}

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart: FC<DoughnutChartProps> = ({ chartData }) => {
  const options: ChartOptions<"doughnut"> = {
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
    cutout: "70%",
    radius: "95%",
  };

  const data: ChartData<"doughnut"> = {
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

  return <Doughnut options={options} data={data} className="p-4" />;
};

export default DoughnutChart;
