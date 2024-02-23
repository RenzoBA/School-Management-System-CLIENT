import { FC } from "react";
import UserStatsCard from "./UserStatsCard";

// pending: replace for db fetching
const users = [
  {
    type: "teachers",
    totalUsers: 280,
    percentage: "+12.5",
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
      data: [110, 156, 170, 165, 198, 190, 230, 90, 111, 124],
      colors: {
        base: "rgb(75, 192, 192)",
        soft: "rgba(75, 192, 192, 0.6)",
      },
    },
  },
  {
    type: "accountants",
    totalUsers: 56,
    percentage: "-20",
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
      data: [11, 15, 17, 14, 19, 22, 19, 25, 20],
      colors: {
        base: "rgb(255, 206, 86)",
        soft: "rgba(255, 206, 86, 0.6)",
      },
    },
  },
  {
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
      colors: {
        base: "rgb(255, 99, 132)",
        soft: "rgba(255, 99, 132, 0.6)",
      },
    },
  },
];

const UserStatsCardsGroup: FC = () => {
  return (
    <div className="flex w-fit flex-row gap-4">
      {users.map((user, i) => (
        <UserStatsCard user={user} key={i} />
      ))}
    </div>
  );
};

export default UserStatsCardsGroup;
