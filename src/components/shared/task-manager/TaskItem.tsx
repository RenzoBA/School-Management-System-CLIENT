import { FC } from "react";
import { TaskStatus } from "./TaskStatus";

export type TaskItemProp = {
    id: string;
    title: string;
    description: string;
    authorId: string
    assignedUserId?: string;
    status: ("Pending" | "In Progress" | "Completed");
    dateCreated: string;
}

const TaskItem: FC<TaskItemProp> = ({ id, title, description, status, authorId, assignedUserId, dateCreated }) => {
    return <div className="flex flex-col cursor-pointer px-2 py-1 rounded-sm hover:bg-background-strong gap-y-1 h-max ">
        <div className="flex justify-center align-middle items-center ">
            <h3 className="font-bold text-tertiary">{title}</h3>
            <div className="ml-auto text-sm">
                <TaskStatus
                status={status}
                id={id}
                />
            </div>
        </div>
        <p className="truncate">{description}</p>
        {/* <p>{status}</p> */}
    </div>;
};

export default TaskItem;
