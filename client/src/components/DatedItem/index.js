import React, { Component } from 'react';
import moment from 'moment';
import Moment from 'react-moment';


class DatedItem extends Component {

  
  constructor(props) {
    super(props);
    this.expiryDate = this.props.item.expiry_date;
    this.todayDateFormated  = moment(new Date(), "YYYYMMDD");
    this.expiryDateFormated = moment(this.expiryDate, "YYYYMMDD");
    this.diff = this.expiryDateFormated.diff(this.todayDateFormated, "days");
  
    this.clickHandler = this.clickHandler.bind(this);
  }

  //invoke
  clickHandler() {
    this.props.clickHandler(this.props.item._id)
  }

  // to update with images
  renderImage() {
    console.log(this.diff)
    if (isNaN(this.diff) === true) return <h5>Expired</h5>;
    if (this.diff >= 0 && this.diff < 3) return <h5>Eat now</h5>;
    if (this.diff >= 3 && this.diff < 6) return <h5>Okay</h5>;
    if (this.diff >= 6) return <h5>Fresh</h5>;
  }


  render() { 

    return (
      <div className="dated-item">
        <div className="item-info"> 
        <h3> {this.props.item.name} </h3>
        <h3> {this.props.item.category} </h3>  
        <Moment format="MMM Do, YYYY">{this.expiryDate}</Moment>
        <div>{this.renderImage()} </div> 
        </div>
        <div className="delete-btn">
          <button onClick={this.clickHandler}>x</button>
        </div>
      </div>
      )
    }
  }

 
export default DatedItem;