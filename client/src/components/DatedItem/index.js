import React, { Component } from 'react';

class DatedItem extends Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  //invoke
  clickHandler() {
    this.props.clickHandler(this.props.item._id)
  }

  render() { 
    return (
      <div>
        <h3>dated item test</h3>
        <h3> {this.props.item.name} </h3>
        <h3> {this.props.item.category} </h3>
        <h3> {this.props.item.expiry_date} </h3>
        <button onClick={this.clickHandler}>x</button>
      </div>
      )
    }
  }

 
export default DatedItem;