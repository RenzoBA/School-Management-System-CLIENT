import CareerStatsCard from "@/components/shared/CareerStatsCard";
import CohortStatsCard from "@/components/shared/CohortStatsCard";
import TransactionStatsCard from "@/components/shared/TransactionStatsCard";
import UserStatsCardsGroup from "@/components/shared/UserStatsCardsGroup";

const page = () => {
  return (
    <div className="flex h-full flex-row gap-4 pt-20">
      <div className="flex flex-col gap-4">
        <UserStatsCardsGroup />
        <TransactionStatsCard />
        <div className="flex flex-row gap-4">
          <CohortStatsCard />
          <CareerStatsCard />
        </div>
      </div>
      <div>taskmanager</div>
    </div>
  );
};

export default page;
