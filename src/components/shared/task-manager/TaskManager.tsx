"use client"
import { getTasks, statusDataTransformer } from "@/services/Tasks/tasks.service";
import { useQuery } from "@tanstack/react-query";
import TaskChart from "./TaskChart"
import TaskCard from "./TasksCard"
import TaskSkeleton from "./task.skeleton";
import Task from "./Task";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";



export const TaskManager: React.FC<{
  handleView: Dispatch<SetStateAction<{
    show: boolean;
    title: string;
    userId: string;
    authorId: string;
    description: string;
    status: "Pending" | "In Progress" | "Completed";
  }>>
}> = ({ handleView}) => {
  const { data, isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => getTasks('1', 100, 'SUPER-ADMIN-001'),
  });
  const tasks = data?.tasks ?? [];
  return <div className="w-72 h-full flex flex-col gap-y-2 ">
    <TaskChart />
    <article className="flex flex-col flex-1 space-y-3 rounded-lg px-2 py-3 shadow overflow-y-auto antialiased scrollbar-w-[2px] scrollbar-thin scrollbar-thumb-background-strong scrollbar-thumb-rounded ">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold capitalize">Pending Tasks</p>
        <Link href="/admin/careers" className="text-xs text-tertiary">
          More Details
        </Link>
      </div>
      <div className="flex flex-col  gap-y-3 overflow-hidden hover:overflow-y-auto antialiased scrollbar-w-[2px] scrollbar-thin scrollbar-thumb-background-strong scrollbar-thumb-rounded ">
        {
          isLoading
            ? <>
              <TaskSkeleton />
              <TaskSkeleton />
              <TaskSkeleton />
              <TaskSkeleton />
              <TaskSkeleton />
              <TaskSkeleton />
              <TaskSkeleton />
            </>

            :
            (tasks?.map((task, i) => {
              // console.log(task)
              if (i < 3 && task.status === 'PENDING')
                return <Task
                  key={task.id}
                  author={task.authorId}
                  description={task.description}
                  id={task.id}
                  status={statusDataTransformer(task.status)}
                  title={task.title}
                  handleView={handleView}
                />
            }
            ))
        }
      </div>
    </article>
  </div>
}