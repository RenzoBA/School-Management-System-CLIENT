import { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import LineChart from "./charts/LineChart";
import { TrendingUp } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface UserStatsCardProps {
  user: {
    type: string;
    totalUsers: number;
    chartData: {
      labels: string[];
      data: number[];
      colors: {
        base: string;
        soft: string;
      };
    };
    percentage: string;
  };
}

const UserStatsCard: FC<UserStatsCardProps> = ({ user }) => {
  return (
    <div className="h-full rounded-lg bg-background px-4 py-3 shadow lg:w-52 xl:w-56 2xl:w-60">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold capitalize">{user.type}</p>
        <Link href={`/admin/${user.type}`} className="text-xs text-tertiary">
          More Details
        </Link>
      </div>
      <div className="flex h-full flex-col">
        <div className="-mb-2 flex flex-col items-start justify-start">
          <p className="text-2xl font-black text-tertiary">{user.totalUsers}</p>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild className="z-10">
                <span
                  className={cn(
                    "flex cursor-pointer flex-row items-center gap-1 text-xs font-semibold",
                    {
                      "text-[#FF6384]": user.percentage[0] === "-",
                      "text-[#4BC0C0]": user.percentage[0] === "+",
                    }
                  )}
                >
                  <TrendingUp size={14} />
                  {user.percentage} %
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Annual growth</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <LineChart chartData={user.chartData} />
      </div>
    </div>
  );
};

export default UserStatsCard;
