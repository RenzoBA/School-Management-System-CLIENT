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

export const TaskStatus: React.FC<{ status: string }> = ({ status }) => {
    const [position, setPosition] = React.useState(status);
    const handleSelectOption = (value: string) => {
        setPosition(value);
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <p className="bg-background-strong p-1.5">{position}</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={handleSelectOption}>
                    <DropdownMenuRadioItem value="Pending">Pending</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="In Progress">In Progress</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Completed">Completed</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
