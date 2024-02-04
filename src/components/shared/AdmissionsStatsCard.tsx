import Link from "next/link";
import { FC } from "react";
import BarsChart from "./charts/BarsChart";

// pending: replace for db fetching
const cohorts = {
  chartData: {
    labels: ["prev years", "2020", "2021", "2022", "2023"],
    data: [80, 165, 198, 190, 230],
  },
};

const AdmissionsStatsCard: FC = () => {
  return (
    <div className=" w-96 space-y-2 rounded-lg bg-background px-4 py-3 shadow">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold capitalize">Admissions Summary</p>
        <Link href="/admin/cohorts" className="text-xs text-tertiary">
          More Details
        </Link>
      </div>
      <div className="-mb-2 flex flex-col items-start justify-start">
        <p className="text-2xl font-black text-tertiary">
          {cohorts.chartData.data.reduce((a, b) => b + a)}
        </p>
      </div>
      <BarsChart chartData={cohorts.chartData} />
    </div>
  );
};

export default AdmissionsStatsCard;
