import Link from "next/link";
import { FC } from "react";
import TaskItem, { TaskItemProp } from "./TaskItem";

const TaskCard: FC<{ tasks: TaskItemProp[] }> = ({ tasks }) => {


    return (
        <article className="flex flex-col space-y-3 rounded-lg bg-background px-4 py-3 shadow">
            <div className="flex flex-row items-center justify-between">
                <p className="font-bold capitalize">Pending Tasks</p>
                <Link href="/admin/careers" className="text-xs text-tertiary">
                    More Details
                </Link>
            </div>
            <div className="flex flex-col h-80 gap-y-3 text-sm">
                {
                    tasks.map((task,i) => {
                        if (task.status == "Pending" && i  < 6) {
                            return <TaskItem
                                authorId={task.authorId}
                                dateCreated={task.dateCreated}
                                description={task.description}
                                id={task.id}
                                status={task.status}
                                title={task.title}
                                assignedUserId={task.assignedUserId}
                                key={task.id}
                            />
                        }
                    }
                    )
                }
            </div>


        </article>
    );
};

export default TaskCard;
