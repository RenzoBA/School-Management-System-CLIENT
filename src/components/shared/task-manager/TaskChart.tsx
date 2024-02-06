import React from 'react'
import DoughnutChart from '../charts/DoughnutChart'
import Link from 'next/link';
// pending: replace for db fetching
const tasks = {
    chartData: {
      labels: ["PENDING", "IN PROGRESS", "COMPLETED"],
      data: [90, 111, 110],
    },
    topTasks: [
      { taskName: "PENDING", studentsNumber: "90" },
      { taskName: "COMPLETED", studentsNumber: "110" },
      { taskName: "IN PROGRESS", studentsNumber: "111" },
    ],
  };
export default function TaskChart() {
  return (
    <div className="space-y-3 gapy-x-3 rounded-lg bg-background px-4 py-3 shadow">
    <div className="flex flex-row items-center justify-between">
      <p className="font-bold capitalize">Tasks Summary</p>
      <Link href="/admin/tasks" className="text-xs text-tertiary">
        More Details
      </Link>
    </div>

    <div className="relative grid place-content-center h-40 mx-auto">
    <DoughnutChart  chartData={tasks.chartData} />
    </div>
  
  
    <div className="space-y-2">

      <div className="flex flex-row items-center justify-between">
        {tasks.topTasks.map((task, i) => (
          <div key={i} className="flex flex-col items-center justify-center">
            <p className="text-xs font-semibold">{task.taskName}</p>
            <span className="text-2xl font-black text-tertiary">
              {task.studentsNumber}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
