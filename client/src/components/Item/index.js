import React, { Component } from 'react';
import doneImg from '../../assets/done-cross.svg';

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
      <div className="item">
        <div className="item-info"> 
          <h4 className="item-name"> {name} </h4>
          <h4 className="item-category"> {category} </h4>
          <h4 className="item-info3">Barcode:&nbsp; {id} </h4>
        </div>
        <div className="delete-btn">
         <button onClick={this.clickHandler}>
          <img src={doneImg} alt={"doneImg"} height= "20px" />
         </button>
        </div>
      </div>
     );
  }
}
 
export default Item;