import CareerStatsCard from "@/components/shared/CareerStatsCard";
import AdmissionsStatsCard from "@/components/shared/AdmissionsStatsCard";
import TransactionStatsCard from "@/components/shared/TransactionStatsCard";
import UserStatsCardsGroup from "@/components/shared/UserStatsCardsGroup";

const page = () => {
  return (
    <div className="flex h-full flex-row gap-4 pt-20">
      <div className="flex flex-col justify-between gap-4">
        <UserStatsCardsGroup />
        <TransactionStatsCard />
        <div className="flex flex-row gap-4">
          <AdmissionsStatsCard />
          <CareerStatsCard />
        </div>
      </div>
      <div className="w-64">taskmanager</div>
    </div>
  );
};

export default page;
