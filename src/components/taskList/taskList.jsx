import React from "react";
import { Task } from "../task/task";
import "./taskList.css";
import { useSelector } from "react-redux";

export function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  return (
    !!tasks.length && (
      <ul className="task-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    )
  );
}
