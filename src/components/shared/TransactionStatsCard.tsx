import Link from "next/link";
import { FC } from "react";
import TwoLinesChart from "./charts/TwoLinesChart";

// pending: replace for db fetching
const transactions = {
  chartData: {
    labels: [
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
    ],
    lines: [
      {
        label: "hello",
        data: [90, 111, 124, 110, 156, 170, 165, 198, 190, 230],
      },
      {
        label: "world",
        data: [110, 166, 170, 165, 158, 190, 230, 90, 111, 154],
      },
    ],
  },
};

const TransactionStatsCard: FC = () => {
  return (
    <div className="rounded-lg bg-background px-4 py-3 shadow xl:w-[704px]">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold capitalize">Transactions Summary</p>
        <Link href="/admin/transactions" className="text-xs text-tertiary">
          More Details
        </Link>
      </div>
      <TwoLinesChart chartData={transactions.chartData} />
    </div>
  );
};

export default TransactionStatsCard;
