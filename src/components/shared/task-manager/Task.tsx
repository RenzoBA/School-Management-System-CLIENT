import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { FC } from "react";
import TaskItem, { TaskItemProp } from "./TaskItem";
import { TaskStatus } from "./TaskStatus";
import { AlignJustify, AlignJustifyIcon, AlignLeft, EditIcon, Trash2 } from "lucide-react"
import { TaskStatus as TaskStatusEnum } from "@/services/Tasks/tasks.type";
import { deleteTaskById } from "@/services/Tasks/tasks.service";
import { useQueryClient, useMutation } from "@tanstack/react-query";
export type TaskProp = {
    id: string;
    title: string;
    description: string;
    author: string;
    status: ("Pending" | "In Progress" | "Completed");
    handleView: Dispatch<SetStateAction<{
        show: boolean;
        title: string;
        userId: string;
        authorId: string;
        description: string;
        status: "Pending" | "In Progress" | "Completed";
    }>>
}
const Task: FC<TaskProp> = ({ id, title, description, author, status, handleView }) => {

    const handleDragStart: React.DragEventHandler<HTMLElement> = ({ dataTransfer }) => {
        const taskId = JSON.stringify({ id: id })
        dataTransfer.setData('text/plain', taskId)

    }
    const handleClick = () => {
        handleView({
            title,
            description,
            status,
            show: true,
            authorId: author,
            userId: 'SUPER-ADMIN-001'
        })
    }
    const queryClient = useQueryClient()
    const mutation = useMutation(
        {
            mutationFn: ({ id }: { id: string }) => deleteTaskById(id),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['tasks'] });
            }
        }
    );

    return (
        <article draggable={true}  onDragStart={handleDragStart} id={id} className="flex w-[100%] relative flex-col space-y-2 rounded-sm bg-background  px-2 py-3 shadow hover:cursor-pointer">
            <div onClick={handleClick} className="flex items-center justify-between">
                <h1 className="text-sm ">{title}</h1>
            </div>
            <div className="w-full h-max flex justify-between ">
                <div onClick={handleClick} className="w-4 h-4" title="description">
                    <AlignLeft className="w-full h-full" />
                </div>
                <div className="w-4 h-4" title="delete" onClick={() => mutation.mutate({ id })}>
                    <Trash2 className="w-full h-full" />
                </div>
            </div>
        </article>
    );
};

export default Task;
