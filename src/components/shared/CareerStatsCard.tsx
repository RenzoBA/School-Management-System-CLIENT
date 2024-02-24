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
    <div className="space-y-2 rounded-lg bg-background px-4 py-3 shadow lg:w-72 xl:w-80">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold capitalize">Careers Summary</p>
        <Link href="/admin/careers" className="text-xs text-tertiary">
          More Details
        </Link>
      </div>
      <div className="flex flex-row gap-8">
        <DoughnutChart chartData={careers.chartData} />
        <div className="w-fit space-y-2 text-center">
          <div className="flex h-full flex-col items-start justify-between">
            {careers.topCareers.map((career, i) => (
              <div key={i} className="flex flex-col items-start justify-center">
                <p className="text-xs font-semibold">
                  <span className="mr-1 rounded-full bg-primary px-1 py-0.5 text-[10px] font-bold text-primary-foreground shadow">
                    {i + 1}
                  </span>
                  {career.careerName}
                </p>
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
