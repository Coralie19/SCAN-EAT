import React, { Component } from 'react';

class Item extends Component {
  
  render() { 
    const name = this.props.name;
    const category = this.props.category;
  
    return ( 
      <div>
        <h3> {name} </h3>
        <h3> {category} </h3>
      </div>
     );
  }
}
 
export default Item;