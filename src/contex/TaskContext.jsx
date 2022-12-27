import React from "react";
import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../Data/tasks";

export const TaskContex = createContext();

export function TaskContextProvider(props) {
  const [tasks, SetTask] = useState([]);
  function createTask(task) {
    SetTask([
      ...tasks,
      {
        title: task.title,
        id: tasks.length + 1,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    SetTask(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    SetTask(data);
  }, []);

  return (
    <TaskContex.Provider value={{ tasks, deleteTask, createTask }}>
      {props.children}
    </TaskContex.Provider>
  );
}
