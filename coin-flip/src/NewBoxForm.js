import React, { Component } from "react";
import { v4 as uuid } from 'uuid';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { width: "", height: "", color: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = {...this.state, id: uuid()}
    this.props.createBox(newBox);
    this.setState({ width: "", height: "", color: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Width</label>
          <input
            type="text"
            name="width"
            id="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
          <label>Height</label>
          <input
            type="text"
            name="height"
            id="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <label>Color</label>
          <input
            type="text"
            name="color"
            id="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
          <button>Add new Box</button>
        </form>
      </div>
    );
  }
}

export default NewBoxForm;
