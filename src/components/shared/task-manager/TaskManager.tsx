import TaskChart from "./TaskChart"
import TaskCard from "./TasksCard"


const tasks = [
    {
      id: "task1",
      title: "Task 1",
      description: " task 1 descripxcvxcvchdthjyhtsdhjhulfhcvbjkgyufghvgfdhvhjhxvcxvcxvcxvcxvxcvxtion",
      authorId: "author1",
      assignedUserId: "user1",
      status: "Pending",
      dateCreated: "2024-02-03T12:00:00Z"
    },
    {
      id: "task2",
      title: "Task 2",
      description: " task 2 description",
      authorId: "author2",
      assignedUserId: "user2",
      status: "IN PROGRESS",
      dateCreated: "2024-02-03T13:30:00Z"
    },
    {
      id: "task3",
      title: "Task 3",
      description: " task 3 description",
      authorId: "author3",
      status: "COMPLETE",
      dateCreated: "2024-02-03T15:45:00Z"
    },
    {
      id: "task1",
      title: "Task 1",
      description: " task 1 description",
      authorId: "author1",
      assignedUserId: "user1",
      status: "Pending",
      dateCreated: "2024-02-03T12:00:00Z"
    },
 
    {
      id: "task1",
      title: "Task 1",
      description: " task 1 description",
      authorId: "author1",
      assignedUserId: "user1",
      status: "Pending",
      dateCreated: "2024-02-03T12:00:00Z"
    },
    {
      id: "task1",
      title: "Task 1",
      description: " task 1 description",
      authorId: "author1",
      assignedUserId: "user1",
      status: "Pending",
      dateCreated: "2024-02-03T12:00:00Z"
    },
    {
      id: "task1",
      title: "Task 1",
      description: " task 1 description",
      authorId: "author1",
      assignedUserId: "user1",
      status: "Pending",
      dateCreated: "2024-02-03T12:00:00Z"
    },
    {
      id: "task1",
      title: "Task 1",
      description: " task 1 description",
      authorId: "author1",
      assignedUserId: "user1",
      status: "Pending",
      dateCreated: "2024-02-03T12:00:00Z"
    },
    {
      id: "task1",
      title: "Task 1",
      description: " task 1 description",
      authorId: "author1",
      assignedUserId: "user1",
      status: "Pending",
      dateCreated: "2024-02-03T12:00:00Z"
    },
    {
      id: "task1",
      title: "Task 1",
      description: " task 1 description",
      authorId: "author1",
      assignedUserId: "user1",
      status: "Pending",
      dateCreated: "2024-02-03T12:00:00Z"
    },
    {
      id: "task1",
      title: "Task 1",
      description: " task 1 description",
      authorId: "author1",
      assignedUserId: "user1",
      status: "Pending",
      dateCreated: "2024-02-03T12:00:00Z"
    },
    {
      id: "task1",
      title: "Task 1",
      description: " task 1 description",
      authorId: "author1",
      assignedUserId: "user1",
      status: "Pending",
      dateCreated: "2024-02-03T12:00:00Z"
    },
    {
      id: "task1",
      title: "Task 1",
      description: " task 1 description",
      authorId: "author1",
      assignedUserId: "user1",
      status: "Pending",
      dateCreated: "2024-02-03T12:00:00Z"
    },
    {
      id: "task2",
      title: "Task 2",
      description: " task 2 description",
      authorId: "author2",
      assignedUserId: "user2",
      status: "IN PROGRESS",
      dateCreated: "2024-02-03T13:30:00Z"
    },
    {
      id: "task3",
      title: "Task 3",
      description: " task 3 description",
      authorId: "author3",
      status: "COMPLETE",
      dateCreated: "2024-02-03T15:45:00Z"
    },
    // Add more tasks as needed
  ];
  
export const TaskManager: React.FC = () => {
    return <div className="w-[23%] flex flex-col gap-y-5">
        <TaskChart />
        <TaskCard
        tasks={tasks}
        />
    </div>
}