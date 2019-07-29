import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  //invoke
  clickHandler() {
    console.log('this.props.id is :', this.props.id)
    this.props.cancelItem(this.props.id)
  }

  render() { 
    const name = this.props.name;
    const category = this.props.category;
    const id = this.props.id;
  
    return ( 
      <div>
        <h3> {name} </h3>
        <h3> {category} </h3>
        <h3> {id} </h3>
        <button onClick={this.clickHandler}>x</button>
      </div>
     );
  }
}
 
export default Item;