import React from "react";
import classnames from "classnames";
import "./task.css";
import { useDispatch } from "react-redux";
import { onDelete, onToggle } from "../../store/slice";

export function Task(props) {
  const { task } = props;
  const dispatch = useDispatch();

  const handleToggle = (e, id) => {
    e.stopPropagation();
    dispatch(onToggle(id));
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    dispatch(onDelete(id));
  };

  return (
    <li className={classnames("task", { complited: task.complited })}>
      <input
        type="checkbox"
        className="task-input"
        checked={task.complited}
        onChange={(e) => handleToggle(e, task.id)}
      />
      <span className="task-text" onClick={(e) => handleToggle(e, task.id)}>
        {task.value}
      </span>
      <button className="task-button" onClick={(e) => handleDelete(e, task.id)}>
        Удалить
      </button>
    </li>
  );
}
