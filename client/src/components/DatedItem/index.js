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
    if (isNaN(this.diff) === true || this.diff<0) return (<div className="status status-red"><h5>Expired</h5></div>);
    if (this.diff >= 0 && this.diff < 3) return (<div className="status status-pink"><h5>Eat soon</h5></div>);
    if (this.diff >= 3 && this.diff < 6) return (<div className="status status-purple"><h5>Good</h5></div>);
    if (this.diff >= 6) return (<div className="status status-blue"><h5>Fresh</h5></div>);
  }


  render() { 

    return (
      <div className="item">
        <div>{this.renderImage()} </div> 
        <div className="item-info"> 
          <h4 className="item-name"> {this.props.item.name} </h4>
          <h4 className="item-category">{this.props.item.category} </h4> 
          <h4 className="item-info3">Best before : &nbsp;  
            <Moment format="MMM Do, YYYY">{this.expiryDate}</Moment> 
          </h4>   
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