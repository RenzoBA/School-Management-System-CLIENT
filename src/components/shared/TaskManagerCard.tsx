import Link from "next/link";
import PieChart from "./charts/PieChart";
import { FC } from "react";
import TaskItem from "./task-manager/TaskItem";

// pending: replace for db fetching
const tasks = {
  chartData: {
    labels: ["COMPLETED", "IN PROGRESS", "PENDING"],
    data: [16, 4, 12],
  },
  list: [
    {
      id: "task1",
      title: "Task 1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ad, quos iure possimus, accusamus quisquam neque molestiae commodi quas consequuntur qui inventore saepe eum modi! Modi quam labore quia ex!",
      authorId: "author1",
      assignedUserId: "user1",
      status: "Pending",
      dateCreated: "2024-02-03T12:00:00Z",
    },
    {
      id: "task2",
      title: "Task 2",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ducimus tempora autem nostrum voluptate debitis beatae nam quis laudantium ullam?",
      authorId: "author2",
      assignedUserId: "user2",
      status: "Pending",
      dateCreated: "2024-02-03T13:30:00Z",
    },
    {
      id: "task3",
      title: "Task 3",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore sequi atque quae eum inventore veritatis, non esse impedit dignissimos quasi!",
      authorId: "author3",
      status: "Pending",
      dateCreated: "2024-02-03T15:45:00Z",
    },
    {
      id: "task4",
      title: "Task 4",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, odit! Dignissimos, incidunt. Consequuntur necessitatibus blanditiis error suscipit sed omnis harum.",
      authorId: "author4",
      assignedUserId: "user4",
      status: "Pending",
      dateCreated: "2024-02-03T12:00:00Z",
    },
    {
      id: "task4",
      title: "Task 4",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, odit! Dignissimos, incidunt. Consequuntur necessitatibus blanditiis error suscipit sed omnis harum.",
      authorId: "author4",
      assignedUserId: "user4",
      status: "Pending",
      dateCreated: "2024-02-03T12:00:00Z",
    },
  ],
};

const TaskManagerCard: FC = () => {
  return (
    <div className="h-full w-full space-y-4 overflow-hidden rounded-lg bg-background px-4 py-3 shadow">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold capitalize">Tasks Summary</p>
        <Link href="/admin/tasks" className="text-xs text-tertiary">
          More Details
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <PieChart chartData={tasks.chartData} />
        <div className="flex flex-row items-center justify-between">
          {tasks.chartData.data.map((groupName, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <p className="text-xs font-semibold">
                {tasks.chartData.labels[i]}
              </p>
              <span className="text-3xl font-black text-tertiary">
                {groupName}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-[0.7rem] text-secondary">Pending task:</p>
        <div className="-mx-4 h-[340px] overflow-y-scroll pl-4 scrollbar-thin scrollbar-thumb-background-strong scrollbar-thumb-rounded">
          {tasks.list.map((task) => (
            <TaskItem task={task} key={task.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskManagerCard;
