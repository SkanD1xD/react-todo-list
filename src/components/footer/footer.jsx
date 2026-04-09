import React from "react";
import "./footer.css";
import { useSelector } from "react-redux";

export function Footer() {
  const tasks = useSelector((state) => state.tasks);
  return (
    !!tasks.length && (
      <span className="footer">
        Всего задач: {tasks.length} | Выполнено:{" "}
        {tasks.filter((task) => task.complited === true).length}
      </span>
    )
  );
}
