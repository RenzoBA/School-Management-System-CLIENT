import { formatTimeToNow } from "@/lib/utils";
import { FC } from "react";

export type TaskItemProp = {
  task: {
    id: string;
    title: string;
    description: string;
    authorId: string;
    assignedUserId?: string;
    status: string;
    dateCreated: string;
  };
};

const TaskItem: FC<TaskItemProp> = ({ task }) => {
  return (
    <div className="flex h-20 w-full cursor-pointer flex-col gap-1 rounded-lg px-3 py-2 text-start transition-all hover:bg-background-strong">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-sm font-bold text-tertiary">{task.title}</h3>
        <p className="whitespace-nowrap text-xs text-secondary">
          {formatTimeToNow(new Date(task.dateCreated))}
        </p>
      </div>
      <p className="line-clamp-2 text-xs">{task.description}</p>
    </div>
  );
};

export default TaskItem;
