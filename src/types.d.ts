// for example -> '6d45ca8f-6736-4155-a539-d647577cb7ad'
type TaskID = `${string}-${string}-${string}-${string}-${string}`;

export interface Task{
    taskID: TaskID
    taskName: string
    taskAuthor: string
    taskDescription: string
};