import React from "react";
import Link from "next/link";
import { FC } from "react";
import TaskItem, { TaskItemProp } from "./TaskItem";
import { TaskStatus } from "./TaskStatus";
import { EditIcon } from "lucide-react"
import { TaskStatus as TaskStatusEnum} from "@/services/Tasks/tasks.type";
import { Skeleton } from "@/components/ui/skeleton";

const TaskSkeleton: FC = () => {


    return (
        <article className="flex min-w-[100%] h-[25%] relative flex-col space-y-2 rounded-sm bg-background  px-2 py-3 shadow hover:cursor-pointer">
            <div className="flex h-[25%] items-center justify-between">
                <Skeleton className="h-6 w-12 bg-background-strong"/>
                <Skeleton className="h-6 w-16 bg-background-strong"/>
            </div>
            <Skeleton className="h-[70%] w-full bg-background-strong"/>
            {
                // <div className="w-full border-t border-gray-800 mt-2  flex justify-end">
                //     {/* <EditIcon className="pt-2 hover:cursor-pointer"/> */}
                // </div>
            }
        </article>
    );
};

export default TaskSkeleton;