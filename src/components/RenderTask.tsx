import { Task } from "../types";
import { useState } from "react";

interface Props {
  task: Task;
  setTask: Function;
}

export default function RenderTask({ task, setTask }: Props) {
  const [done, setDone] = useState<boolean>(false);

  function handleDelete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    setTask((prev: Task[]) => {
      return prev.filter((prevTask) => prevTask.taskID !== task.taskID);
    });
  }

  function handleDone(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    setDone(!done);
  }

  return (
    <div className={!done ? "task" : "task done"}>
      <div className="text">
        <div className="information">
          <h2>{task.taskName}</h2> <i>by {task.taskAuthor}</i>
        </div>
        <p className="description">{task.taskDescription}</p>
      </div>
      <div className="buttons">
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
        <button className="done" onClick={handleDone}>
          {!done ? "Done" : "Undone"}
        </button>
      </div>
    </div>
  );
}
