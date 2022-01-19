import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoItem from "./TodoItem";
import "./TodoList.css"

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.hCompleted = this.hCompleted.bind(this)
  }

  remove(rtodo){
    this.setState({ todos :this.state.todos.filter(todo => todo.id !== rtodo)})
  }

  create(newTodo) {
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  update(id, updatedTask){
    const updatedTodos = this.state.todos.map(todo => 
      {
        if(todo.id === id){
          return{ ...todo, updatedTask}
        }
        return todo;
      })
      this.setState({
        todos: updatedTodos
      })
  }

  hCompleted(id){
    const updatedTodos = this.state.todos.map(todo => 
      {
        if(todo.id === id){
          return{ ...todo, completed: !todo.completed}
        }
        return todo;
      })
      this.setState({
        todos: updatedTodos
      })
  }

  render() {
      const todos = this.state.todos.map(todo=> (
        <TodoItem 
        key={todo.id}
        id={todo.id}
        todoMessage={todo.todoM}
        completed = {todo.completed}
        removeTodo={() => this.remove(todo.id)}
        updateTodo={this.update}
        handleCompleted={this.hCompleted}
        />
      ))
    return (
      <div className="TodoList">
        <header className="text-center text-light my-4">
        <h1 className="mb-4">To do List</h1>
      </header>
        {todos}
        <NewTodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;
