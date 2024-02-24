"use client"
import { TaskProp } from "@/components/shared/task-manager/Task";
import TaskForm from "@/components/shared/task-manager/TaskForm";
import { TaskManager } from "@/components/shared/task-manager/TaskManager";
import TaskContainer from "@/components/shared/task-manager/TasksContainer";
import { toast } from "@/components/ui/use-toast";
import { getTasks, statusDataTransformer } from "@/services/Tasks/tasks.service";
import { TaskStatus } from "@/services/Tasks/tasks.type";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const page = () => {


    const { error, data, isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: () => getTasks('1', 50, 'SUPER-ADMIN-001'),
    });
    const pendingTasks = data?.tasks.filter(task => task.status == 'PENDING') ?? [];
    const completedTasks =  data?.tasks.filter(task => task.status == 'COMPLETED') ?? [];
    const inProgressTasks =  data?.tasks.filter(task => task.status == 'IN_PROGRESS') ?? [];
    const [showAddForm, setShowAddForm] = useState<{show:boolean,title:string, userId:string, authorId:string, description:string,status:"Pending" | "In Progress" | "Completed"}>({show:false,status:'Pending',title:"",description:"",userId:'',authorId:''});
    const handleAdd =(type:"Pending" | "In Progress" | "Completed")=>{
        setShowAddForm({show:true,status:type,title:"",description:"",userId:'',authorId:''})
    }
    if(error){
        toast(
            {
                title:'Something went wrong',
                description:error.message
            }
        )
    }
    return <div className=" pt-16 flex h-[96vh] gap-2">
       { showAddForm.show && <TaskForm taskDescription={showAddForm.title} assignedUserId={showAddForm.userId} taskTitle={showAddForm.title} status={showAddForm.status} closeModal={()=>setShowAddForm({show:false,status:'Pending',title:"",description:"",userId:'',authorId:''})}/>}
        <TaskContainer
            type="Pending"
            key={"Pending"}
            tasks={pendingTasks.map(task => {
                const { status, ...data } = task;
                return {
                  ...data,
                  ['status']: statusDataTransformer(status)
                }
              })}
            addHandler={()=>handleAdd('Pending')}
            isLoading={isLoading}
            handleView={setShowAddForm}
        />
        <TaskContainer
            type="In Progress"
            key={"In Progress"}
            tasks={inProgressTasks.map(task => {
                const { status, ...data } = task;
                return {
                  ...data,
                  ['status']: statusDataTransformer(status)
                }
              })}
            addHandler={()=>handleAdd('In Progress')}
            isLoading={isLoading}
            handleView={setShowAddForm}
        />
        <TaskContainer
            type="Completed"
            key={"Completed"}
            tasks={completedTasks.map(task => {
                const { status, ...data } = task;
                return {
                  ...data,
                  ['status']: statusDataTransformer(status)
                }
              })}
            addHandler={()=>handleAdd('Completed')}
            isLoading={isLoading}
            handleView={setShowAddForm}
        />
        <TaskManager handleView={setShowAddForm}/>

    </div>;
};

export default page;

