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
    <div className="space-y-2 rounded-lg bg-background px-4 py-3 shadow xl:w-80">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold capitalize">Careers Summary</p>
        <Link href="/admin/careers" className="text-xs text-tertiary">
          More Details
        </Link>
      </div>
      <div className="flex flex-row">
        <DoughnutChart chartData={careers.chartData} />
        <div className="w-32 space-y-2 text-center">
          <p className="text-[0.7rem] text-[#9699A6]">Top 3:</p>
          <div className="flex flex-col items-center justify-between">
            {careers.topCareers.map((career, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center"
              >
                <p className="text-xs font-semibold">{career.careerName}</p>
                <span className="text-xl font-black text-tertiary">
                  {career.studentsNumber}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerStatsCard;
