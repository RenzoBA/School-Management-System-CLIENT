import { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import LineChart from "./LineChart";

interface UserStatsCardProps {
  users: {
    type: string;
    totalUsers: number;
    chartData: {
      labels: string[];
      data: number[];
    };
    percentage: string;
  };
}

const UserStatsCard: FC<UserStatsCardProps> = ({ users }) => {
  return (
    <div className="bg-background w-52 rounded-lg px-4 py-3 shadow">
      <label className="text-secondary text-[0.7rem]">{users.type}</label>
      <div className="flex h-16 flex-row items-start justify-between">
        <p className="text-2xl font-semibold">{users.totalUsers}</p>
        <LineChart chartData={users.chartData} />
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <p className="text-tertiary flex w-fit cursor-pointer flex-row gap-2 text-xs">
              {users.percentage} %
            </p>
          </TooltipTrigger>
          <TooltipContent>
            <p>Annual growth.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default UserStatsCard;
