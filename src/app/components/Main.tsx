import { useState, useEffect } from "react";

import AddTaskForm from "@components/AddTaskForm";
import Task from "@components/Task";
import Loader from "@components/Loader";
import ErrorMessage from "@components/ErrorMessage";
import Menu from "@components/Menu";

import { getTasks } from "@import/app/services/tasks";
import { Task as T_Task } from "@types";

type DataStatus = "loading" | "error" | "loaded" | "done" | "pending";

export default function Main() {
  const [user, setUser] = useState<string>("gustavo");
  const [todos, setTodos] = useState<T_Task[]>([]);
  const [status, setStatus] = useState<DataStatus>("loading");
  const todosToRender = [];

  useEffect(() => {
    setTasks();
  }, [user]);

  async function setTasks() {
    if (todos.length > 0) return;
    try {
      setTodos(await getTasks(false));
      setStatus("loaded");
    } catch {
      setStatus("error");
    }
  }

  function handleCheckboxChange(e: any): void {
    setTodos(
      todos.map((item) => {
        if (item.id === e.target.name) {
          item.done = !item.done;
        }
        return item;
      }),
    );
  }

  function handleOnAdd(todo: T_Task) {
    setTodos([todo, ...todos]);
  }

  function handleDelete(todoId: string) {
    setTodos(todos.filter((item) => item.id !== todoId));
  }

  function handleEdit(todoId: string, label: string) {
    setTodos(
      todos.map((item) => {
        if (item.id === todoId) {
          item.label = label;
        }
        return item;
      }),
    );
  }

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "error") {
    return (
      <ErrorMessage>
        Something went wrong. Please contact your administrator.
      </ErrorMessage>
    );
  }

  if (status === "done") {
    todosToRender.push(...todos.filter((task) => task.done));
  }

  if (status === "loaded") {
    todosToRender.push(...todos.sort((a, b) => a.done - b.done));
  }

  if (status === "pending") {
    todosToRender.push(...todos.filter((task) => !task.done));
  }

  return (
    <main className="flex h-96 max-h-96 w-10/12 max-w-xl flex-col items-center justify-center text-xl">
      <Menu
        action={function (status: DataStatus) {
          setStatus(status);
        }}
      />

      <AddTaskForm onAdd={handleOnAdd} />

      <div className="h-full w-full overflow-y-scroll">
        <ul>
          {todosToRender.map(({ id, label, done }) => (
            <Task
              key={id}
              id={id}
              label={label}
              done={done}
              onCheck={handleCheckboxChange}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
