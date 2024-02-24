import axios from "axios";
import { Task, TaskStatus } from "./tasks.type";
const baseURL = process.env.BASE_URL ?? 'http://localhost:3001'
const statusTransformer = (status: "Pending" | "In Progress" | "Completed") => {
    switch (status) {
        case "Pending":
            return "PENDING"
        case 'In Progress':
            return "IN_PROGRESS"
        case "Completed":
            return "COMPLETED"
        default:
            break;
    }
}
export const createTask = async (title: string, assignedUserId: string, authorId: string, description: string, status: "Pending" | "In Progress" | "Completed"): Promise<Task> => {
    const taskStatus = statusTransformer(status);
    try {
        return (await (axios.post(`${baseURL}/task`,
            {
                assignedUserId,
                description,
                authorId,
                title,
                status: taskStatus
            },
            { withCredentials: true }
        ))).data as Task
    } catch (error) {
        console.log(error)
        throw new Error(JSON.stringify(error))
    }
}
export const getTasks = async (page: string, take: number, assignedUserId: string): Promise<{ tasks: Task[] }> => {
    try {
        return (await axios.get(`${baseURL}/task?page=${page}&take=${take}&assignedUserId=${assignedUserId}`, { withCredentials: true })).data as { tasks: Task[] }
    } catch (error) {
        console.log(error)
        throw new Error(JSON.stringify(error))
    }
}
export const getTaskById = async (id: string): Promise<Task> => {
    try {
        return (await (axios.get(`${baseURL}/task/${id}`, { withCredentials: true }))).data as Task
    } catch (error) {
        console.log(error)
        throw new Error(JSON.stringify(error))
    }
}
export const updateTask = async (id: string, status: "Pending" | "In Progress" | "Completed"): Promise<Task> => {


    try {
        return (await (axios.put(`${baseURL}/task/${id}`,
            {
                id: id,
                status: statusTransformer(status)
            },
            {
                withCredentials: true
            }))).data as Task
    } catch (error) {
        console.log(error)
        throw new Error(JSON.stringify(error))
    }
}

export const deleteTaskById = async (id: string): Promise<void> => {
    try {
        await axios.delete(`${baseURL}/task/${id}`, { withCredentials: true })
    } catch (error) {
        console.log(error)
        throw new Error(JSON.stringify(error))
    }
}

export const statusDataTransformer = (status: "PENDING" | "IN_PROGRESS" | "COMPLETED") => {
    switch (status) {
        case "PENDING":
            return "Pending"
        case 'IN_PROGRESS':
            return "In Progress"
        case "COMPLETED":
            return "Completed"
        default:
            return "Pending"
    }
}