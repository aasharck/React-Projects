import React, { Component } from "react";
import "./NewTodoForm.css"
import { v4 as uuid } from "uuid";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoM: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newTodo = { ...this.state, id: uuid(), completed:false };
    this.props.createTodo(newTodo);
    this.setState({ todoM: "" });
  }

  render() {
    return (
      <div>
        <form className="add text-center my-4" onSubmit={this.handleSubmit}>
          <input type="text" name="todoM" value={this.state.todoM} id="todoM" onChange={this.handleChange} />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
