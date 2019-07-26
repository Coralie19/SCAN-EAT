import React, { Component } from 'react';

class DatedItem extends Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  //invoke
  clickHandler() {
    //this.props.clickHandler(this.props.item.code) //item code to set
  }

  render() { 
    return (
      <div>
        <h3>dated item test</h3>
        {/* <h3> {this.props.expiryDate} </h3> */}
        <button onClick={this.clickHandler}>x</button>
      </div>
      )
    }
  }

 
export default DatedItem;