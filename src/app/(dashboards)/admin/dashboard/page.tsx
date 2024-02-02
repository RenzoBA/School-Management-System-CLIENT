import CareerStatsCard from "@/components/shared/CareerStatsCard";
import CohortStatsCard from "@/components/shared/CohortStatsCard";
import TransactionStatsCard from "@/components/shared/TransactionStatsCard";
import UserStatsCardsGroup from "@/components/shared/UserStatsCardsGroup";

const page = () => {
  return (
    <div>
      <UserStatsCardsGroup />
      <br />
      <CohortStatsCard />
      <br />
      <TransactionStatsCard />
      <br />
      <CareerStatsCard />
    </div>
  );
};

export default page;
