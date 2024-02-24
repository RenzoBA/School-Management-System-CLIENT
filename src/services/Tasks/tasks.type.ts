export type Task = {
    id: string,
    title: string,
    description: string,
    authorId: string
    assignedUserId?: string
    status: ("PENDING" | "IN_PROGRESS" | "COMPLETED")
    dateCreated: string
}
export type TransformedTask = {
    id: string,
    title: string,
    description: string,
    authorId: string
    assignedUserId?: string
    status: ("Pending" | "In Progress" | "Completed")
    dateCreated: string
}

export enum TaskStatus {
    "PENDING",
    "IN_PROGRESS",
    "COMPLETED"
}