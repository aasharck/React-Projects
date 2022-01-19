import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      task: this.props.todoMessage,
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  toggleForm() {
    this.setState({ isEdit: !this.state.isEdit });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({
      isEdit: false,
    });
  }

  toggleCompleted(evt) {
    this.props.handleCompleted(this.props.id);
  }

  render() {
    let result;
    if (this.state.isEdit) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="todos">
          <ul className="list-group todos mx-auto text-light">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span
                className={this.props.completed && "completed"}
                onClick={this.toggleCompleted}
              >
                {this.state.task}
              </span>
              <span className="button" onClick={this.toggleForm}>Edit</span>
              <span className="button" onClick={this.props.removeTodo}>x</span>
            </li>
          </ul>
        </div>
      );
    }
    return result;
  }
}

export default TodoItem;
