import { createSlice } from "@reduxjs/toolkit";

function getInitTasks() {
  const rawTasks = localStorage.getItem("tasks");
  return rawTasks ? JSON.parse(rawTasks) : [];
}

const taskSlice = createSlice({
  name: "tasks",
  initialState: getInitTasks(),
  reducers: {
    onAdd: (state, action) => {
      state.push({
        id: Date.now(),
        value: action.payload,
        complited: false,
      });
    },
    onToggle: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.complited = !task.complited;
      }
    },
    onDelete: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { onAdd, onToggle, onDelete } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
