import { Task } from "../types";
import { useState } from "react";

interface Props {
  setTask: Function;
}

export default function Form({ setTask }: Props) {
  const [taskName, setTaskName] = useState<string>("");
  const [taskAuthor, setTaskAuthor] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");

  const [taskErrorName, setTaskErrorName] = useState<boolean>(false);
  const [taskErrorAuthor, setTaskErrorAuthor] = useState<boolean>(false);
  const [taskErrorDescription, setTaskErrorDescription] =
    useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "name") {
      setTaskName(e.target.value);
    } else if (e.target.name === "author") {
      setTaskAuthor(e.target.value);
    } else if (e.target.name === "description") {
      setTaskDescription(e.target.value);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (taskName.length < 4) {
      setTaskErrorName(true);
    } else {
      setTaskErrorName(false);
    }

    if (taskAuthor.length < 3) {
      setTaskErrorAuthor(true);
    } else {
      setTaskErrorAuthor(false);
    }

    if (taskDescription.length < 10) {
      setTaskErrorDescription(true);
    } else {
      setTaskErrorDescription(false);
    }

    if (
      taskName === "" ||
      taskAuthor == "" ||
      taskDescription == "" ||
      taskErrorName ||
      taskErrorAuthor ||
      taskErrorDescription
    ) {
      return;
    } else if (!taskErrorName && !taskErrorAuthor && !taskErrorDescription) {
      setTask((prev: Task[]) => {
        const newTask: Task = {
          taskID: crypto.randomUUID(),
          taskName: taskName,
          taskAuthor: taskAuthor,
          taskDescription: taskDescription,
        };

        return [newTask, ...prev];
      });
      setTaskName("");
      setTaskAuthor("");
      setTaskDescription("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={taskErrorName ? "error" : undefined}
        onChange={handleChange}
        name="name"
        placeholder="Enter the task's name"
        value={taskName}
      />
      <input
        type="text"
        className={taskErrorAuthor ? "error" : undefined}
        onChange={handleChange}
        name="author"
        placeholder="Enter the task's author"
        value={taskAuthor}
      />
      <input
        type="text"
        className={taskErrorDescription ? "error" : undefined}
        onChange={handleChange}
        name="description"
        placeholder="description"
        value={taskDescription}
      />
      <button>Create Task</button>
    </form>
  );
}
