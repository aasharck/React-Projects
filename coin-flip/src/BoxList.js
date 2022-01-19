import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Boxes: [],
    };
    this.createBox = this.createBox.bind(this);
  }
  remove(id){
      this.setState({ Boxes :this.state.Boxes.filter(box => box.id !== id)})
  }

  createBox(newBox) {
    this.setState({ Boxes: [...this.state.Boxes, newBox] });
  }
  render() {
    const Boxes = this.state.Boxes.map((box) => (
      <Box key={box.id} 
      id={box.id}
      width={box.width} 
      height={box.height} 
      color={box.color} 
      removeBox={() => this.remove(box.id)}/>
    ));
    return (
      <div>
        <NewBoxForm createBox={this.createBox} />
        {Boxes}
      </div>
    );
  }
}

export default BoxList;
