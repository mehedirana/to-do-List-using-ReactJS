import React, { useState } from "react";
import {  Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";

export const TodoForm = ({ handleAddToList }) => {
    
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      handleAddToList({ ...todo, id: uuidv4() });
      //rest task input
      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <form  onSubmit={handleSubmit}>
      <TextField
        style={{ width: "40%", backgroundColor:'white', top:10, marginRight:5 }}
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      {/* <button type="submit" name="add note" title/> */}
      <Fab type="submit" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </form>
  );
};
