import React from "react";
import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";

function EditTodoForm({ editTodo, id, toggleEditForm, task }) {
  const [value, handleChange, resetTodo] = useInputState(task);

  return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editTodo(id, value);
          resetTodo();
          toggleEditForm();
        }}
        style={{ marginLeft: "1rem", width: "50%" }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          fullWidth
          autoFocus
        ></TextField>
      </form>
  );
}

export default EditTodoForm;
