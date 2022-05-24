import React from "react";
import { TextField } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import useInputState from "./hooks/useInputState";

function TodoForm({ addTodo }) {
  const [todo, handleChange, resetTodo] = useInputState("");

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(todo);
          resetTodo();
        }}
      >
        <TextField
          value={todo}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        ></TextField>
      </form>
    </Paper>
  );
}

export default TodoForm;
