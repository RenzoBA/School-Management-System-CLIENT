import UserStatsCard from "@/components/shared/UserStatsCard";

const page = () => {
  return (
    <div>
      <UserStatsCard
        users={{
          type: "students",
          totalUsers: 893,
          percentage: "+2.5",
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
            data: [90, 111, 124, 110, 156, 170, 165, 198, 190, 230],
          },
        }}
      />
      admin dashboard
    </div>
  );
};

export default page;
