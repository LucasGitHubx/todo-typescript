import { useState, useEffect } from "react";
import { Task } from "./types";
import RenderTask from "./components/RenderTask";
import Form from "./components/Form";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <>
      <header>
        <h1>TODOs with TypeScript </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png"
          alt="TypeScript Logo"
        />
      </header>
      <Form setTask={setTasks} />
      <div className="tasks">
        {tasks.length == 0 ? (
          <h2 className="no-tasks">There are no tasks yet</h2>
        ) : (
          tasks.map((task: Task): JSX.Element => {
            return <RenderTask task={task} setTask={setTasks} />;
          })
        )}
      </div>
    </>
  );
}
