import React from "react";
import "./todo.css";

export function Todo(props) {
  return (
    <div className="todo">
      <div className="todo-container">{props.children}</div>
    </div>
  );
}
