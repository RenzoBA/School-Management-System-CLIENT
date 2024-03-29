import Link from "next/link";
import { FC } from "react";
import DoughnutChart from "./charts/DoughnutChart";

// pending: replace for db fetching
const careers = {
  chartData: {
    labels: ["JS", "PYTHON", "DC", "MARVEL", "AWS", "OTHERS"],
    data: [90, 111, 110, 124, 156, 230],
  },
  topCareers: [
    { careerName: "AWS", studentsNumber: "156" },
    { careerName: "MARVEL", studentsNumber: "124" },
    { careerName: "PYTHON", studentsNumber: "111" },
  ],
};

const CareerStatsCard: FC = () => {
  return (
    <div className="w-72 space-y-2 rounded-lg bg-background px-4 py-3 shadow">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold capitalize">Careers Summary</p>
        <Link href="/admin/careers" className="text-xs text-tertiary">
          More Details
        </Link>
      </div>
      <DoughnutChart chartData={careers.chartData} />
      <div className="space-y-2">
        <p className="text-[0.7rem] text-[#9699A6]">Top 3 careers</p>
        <div className="flex flex-row items-center justify-between">
          {careers.topCareers.map((career, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <p className="text-xs font-semibold">{career.careerName}</p>
              <span className="text-2xl font-black text-tertiary">
                {career.studentsNumber}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerStatsCard;
