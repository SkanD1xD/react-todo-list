import React, { useState } from "react";
import "./inputContainer.css";
import { useDispatch } from "react-redux";
import { onAdd } from "../../store/slice";

export function InputContainer() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    e.stopPropagation();
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    e.stopPropagation();
    e.key === "Enter" && value.length && dispatch(onAdd(value)) && setValue("");
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    if (!value.length) {
      return;
    }
    dispatch(onAdd(value));
    setValue("");
  };

  return (
    <div className="input-container">
      <input
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Добавить новую задачу..."
      />
      <button onClick={handleAdd}>Добавить</button>
    </div>
  );
}
