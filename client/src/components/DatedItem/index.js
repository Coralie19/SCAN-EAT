import React, { Component } from 'react';
import moment from 'moment';
import Moment from 'react-moment';
import doneImg from '../../assets/done-cross.svg';

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
    if (isNaN(this.diff) === true) return <h5 className="status status-red">Expired</h5>;
    if (this.diff >= 0 && this.diff < 3) return <h5 className="status status-pink">Eat soon</h5>
    if (this.diff >= 3 && this.diff < 6) return <h5 className="status status-purple">Okay</h5>;
    if (this.diff >= 6) return <h5 className="status status-blue">Fresh</h5>;
  }


  render() { 

    return (
      <div className="dated-item">
        <div>{this.renderImage()} </div> 
        <div className="item-info"> 
        <h4> {this.props.item.name} </h4>
        <h4> {this.props.item.category} </h4>  
        <Moment format="MMM Do, YYYY">{this.expiryDate}</Moment>
        </div>
        <div className="delete-btn">
          <button onClick={this.clickHandler}>
          <img src={doneImg} alt={"doneImg"} height= "20px" />
          </button>
        </div>
      </div>
      )
    }
  }

 
export default DatedItem;