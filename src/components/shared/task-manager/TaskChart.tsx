import React from 'react'
import DoughnutChart from '../charts/DoughnutChart'
import Link from 'next/link';
import { getTasks } from '@/services/Tasks/tasks.service';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';
import TaskSkeleton from './task.skeleton';

export default function TaskChart() {
  const { error, data, isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => getTasks('1', 300, 'SUPER-ADMIN-001'),
  });
  const pendingTasks = data?.tasks.filter(task => task.status == 'PENDING') ?? [];
  const completedTasks = data?.tasks.filter(task => task.status == 'COMPLETED') ?? [];
  const inProgressTasks = data?.tasks.filter(task => task.status == 'IN_PROGRESS') ?? [];
  const tasks = {
    chartData: {
      labels: ["PENDING", "IN PROGRESS", "COMPLETED"],
      data: [90, 111, 110],
    },
    topTasks: [
      { taskName: "PENDING", status: pendingTasks.length },
      { taskName: "IN PROGRESS", status: inProgressTasks.length },
      { taskName: "COMPLETED", status: completedTasks.length },
    ],
  };
  return (
    <div className="space-y-3 max-h-1/4 rounded-lg bg-background px-2 py-3 shadow">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold capitalize">Tasks Summary</p>
        <Link href="/admin/tasks" className="text-xs text-tertiary">
          More Details
        </Link>
      </div>

      <div className="relative grid place-content-center  mx-auto">
        {isLoading ? <Skeleton className='h-[120px] w-[120px] rounded-full bg-background-strong' /> : <DoughnutChart chartData={tasks.chartData} />}
      </div>


      <div className="space-y-2">

        <div className="flex flex-row items-center justify-between">
          {
            tasks.topTasks.map((task, i) => (
              <div key={i} className="flex flex-col items-center justify-center">
                <p className="text-xs font-semibold">{task.taskName}</p>
                <span className="text-2xl font-black text-tertiary">
                  {task.status}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
