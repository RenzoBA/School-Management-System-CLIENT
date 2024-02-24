import React, { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { FC } from "react";
import TaskItem, { TaskItemProp } from "./TaskItem";
import { TaskStatus } from "./TaskStatus";
import { EditIcon, PlusCircle } from "lucide-react"
import Task from "./Task";
import { Task as TaskType, TransformedTask } from "@/services/Tasks/tasks.type";
import TaskSkeleton from "./task.skeleton";
import { updateTask } from "@/services/Tasks/tasks.service";
import { useQueryClient, useMutation } from "@tanstack/react-query";

const TaskContainer: FC<{ type: "Pending" | "In Progress" | "Completed", tasks:TransformedTask[] | undefined, addHandler: () => void, isLoading: boolean, handleView:  Dispatch<SetStateAction<{
    show: boolean;
    title: string;
    userId: string;
    authorId: string;
    description: string;
    status: "Pending" | "In Progress" | "Completed";
}>>}> = ({ tasks, type, addHandler, isLoading,handleView }) => {
const [dragOver,setDragOver] =useState(false)
const queryClient = useQueryClient()
const mutation = useMutation(
    {
        mutationFn: ({ id,status }: { id:string,status: "Pending" | "In Progress" | "Completed" }) => updateTask(id,status),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            
        }
    }
);
    return (
        <div 
            className={`flex w-60 max-h-full flex-col gap-y-1.5 rounded-sm px-1.5 py-1  shadow ${dragOver && "dragover"}`}
            onDragOver={(e)=>{
            e.preventDefault();
            setDragOver(true);
            }} 
            onDragLeave={()=>setDragOver(false)}
            onDrop={(e)=>{
                e.preventDefault();
             const taskId = e.dataTransfer.getData('text/plain');
             if(taskId){
                const {id} =JSON.parse(taskId) as {id:string}
                 mutation.mutate({id,status:type})
                
             }
             setDragOver(false) 
            }}

            >
            <div className="flex w-full items-center bg-tertiary justify-between align-middle rounded-md  p-1.5">
                <h2 className="text-white">{type}</h2>
                <p className="p-3 w-7 h-7 flex justify-center align-middle items-center bg-background-strong rounded-full">{!isLoading && tasks?.length}</p>
            </div>
            <div className=" flex flex-col flex-1 space-y-3 rounded-lg px-1 py-1.5 shadow overflow-hidden hover:overflow-y-auto antialiased scrollbar-w-[2px] scrollbar-thin scrollbar-thumb-background-strong scrollbar-thumb-rounded ">
                {
                    !isLoading
                        ?
                        (tasks?.map(task => <Task
                            key={task.id}
                            author={task.authorId}
                            description={task.description}
                            id={task.id}
                            status={(task.status)}
                            title={task.title}
                            handleView={handleView}
                        />
                        ))
                        :
                        <>
                            <TaskSkeleton />
                            <TaskSkeleton />
                            <TaskSkeleton />
                            <TaskSkeleton />
                        </>
                }
            </div>
            <div onClick={addHandler} className="flex hover:cursor-pointer bg-background  justify-center items-center rounded-md">
                <PlusCircle size={45} className="p-2 text-base rounded-full" />

            </div>

        </div>
    );
};

export default TaskContainer;
