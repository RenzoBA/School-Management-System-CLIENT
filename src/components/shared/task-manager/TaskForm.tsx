import { useQueryClient, useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { TaskStatus } from '@/services/Tasks/tasks.type'
import { Button } from '@/components/ui/button'
import { Hand, Truck, X } from 'lucide-react'
import { createTask } from '@/services/Tasks/tasks.service'

export default function TaskForm({ status, closeModal, taskTitle, taskDescription, assignedUserId }: { taskTitle: string, taskDescription: string, assignedUserId: string, status: "Pending" | "In Progress" | "Completed", closeModal: () => void }) {
    const [personalTask, setPersonalTask] = useState(true);
    const [selectedStatus, setSelectedStatus] = useState(status);
    const [title, setTitle] = useState(taskTitle);
    const [description, setDescription] = useState(taskDescription);
    const [userId, setUserId] = useState(assignedUserId);
    const queryClient = useQueryClient()
    const mutation = useMutation(
        {
            mutationFn: ({ title, authorId, description, status, assignedUserId }: { assignedUserId: string, title: string, authorId: string, description: string, status: "Pending" | "In Progress" | "Completed" }) => createTask(title, assignedUserId, authorId, description, status),
            onSuccess: () => {
                closeModal();
                queryClient.invalidateQueries({ queryKey: ['tasks'] });
            }
        }
    );

    useEffect(() => {
        if (personalTask) {
            setUserId('SUPER-ADMIN-001')
        }
    }, [personalTask])
    return (
        <div className='fixed overflow-hidden z-20 scrollbar-none backdrop-blur-sm top-0 right-0 w-screen h-screen flex items-center justify-center'>
            <X size={30} onClick={closeModal} className='fixed top-[6%] right-[3%] hover:cursor-pointer' />
            <div className='w-[50%] z-1 h-max bg-background rounded-md flex flex-col gap-y-10 p-4'>
                <div className='flex justify-between'>
                    <div className='w-30 flex flex-col gap-y-3 items-start align-middle'>
                        <Label htmlFor="title">Title</Label>
                        <Input width={'100%'} placeholder='Title' id={"title"} value={title} onChange={({ target }) => setTitle(target.value)} />
                    </div>
                    <div className='w-max'>
                        <Select onValueChange={(value) => setSelectedStatus(value as "Pending" | "In Progress" | "Completed")}>
                            <SelectTrigger id="status">
                                <SelectValue placeholder={selectedStatus} />
                            </SelectTrigger>
                            <SelectContent className="bg-background-strong" position="popper">
                                <SelectItem value={'In Progress'} >IN PROGRESS</SelectItem>
                                <SelectItem value={'Pending'} >PENDING</SelectItem>
                                <SelectItem value={'Completed'} >COMPLETED</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <Textarea placeholder='Enter description' rows={12} value={description} onChange={({ target }) => setDescription(target.value)} />
                <div className='w-30 flex flex-col gap-y-3 items-start align-middle'>
                    <div className="flex w-max gap-4 items-center justify-between ">
                        <p >Assign to</p>
                        <div className="w-max">
                            <Select onValueChange={(value) => {
                                if (value == "SELF") {
                                    setPersonalTask(true)

                                } else {
                                    setPersonalTask(false)
                                }
                            }}>
                                <SelectTrigger id="status">
                                    <SelectValue placeholder={'Self'} />
                                </SelectTrigger>
                                <SelectContent className="bg-background-strong" position="popper">
                                    <SelectItem value={'SELF'} >Self</SelectItem>
                                    <SelectItem value={'OTHERS'} >Others</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    {
                        !personalTask &&
                        <div className='w-22'>
                            <Input width={4} placeholder='user code' id={"user"} value={userId} onChange={({ target }) => setUserId(target.value)} />
                        </div>
                    }
                </div>
                <Button
                    onClick={() => mutation.mutate({ title, authorId: 'SUPER-ADMIN-001', assignedUserId: userId, description, status: selectedStatus })}
                >
                    Submit
                </Button>
            </div>
        </div>
    )
}
