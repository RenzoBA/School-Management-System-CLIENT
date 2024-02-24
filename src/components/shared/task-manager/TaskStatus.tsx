"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TaskStatus as TaskStatusEnum } from "@/services/Tasks/tasks.type"
import { useMutation ,useQueryClient} from "@tanstack/react-query"
import { updateTask } from "@/services/Tasks/tasks.service"

export const TaskStatus: React.FC<{ status: ("Pending" | "In Progress" | "Completed"),id:string }> = ({ status ,id}) => {
    const [position, setPosition] = React.useState(status as string);
    const queryClient = useQueryClient()
    const mutation = useMutation(
        {
            mutationFn: ({ id,status }: { id:string,status: "Pending" | "In Progress" | "Completed" }) => updateTask(id,status),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['tasks'] });
                
            }
        }
    );
    const handleSelectOption = (value:string) => {
        setPosition(value as ("Pending" | "In Progress" | "Completed"));
        mutation.mutate({id:id,status:(value as ("Pending" | "In Progress" | "Completed")) })
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <p className="bg-background-strong p-1.5 text-sm hover:cursor-pointer">{position}</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position as unknown as string | undefined} onValueChange={handleSelectOption}>
                    <DropdownMenuRadioItem value="Pending">Pending</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="In Progress">In Progress</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Completed">Completed</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
