import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import calimg from '../../assets/cal.svg';


class Datepicker extends Component {

  //Setting the expiry date:
  handleChange = date => {
    this.props.onSelect(date);
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  onClick = (event) => {
    this.handleSubmit(event);
    this.props.addItem()  
  }

  render() { 
    return ( 
      <div className="calendar">
        <h4 className="calendar-input">Add date : </h4>
        <form onSubmit={this.onClick}>
          <DatePicker
            selected={this.props.date}
            onChange={this.handleChange} //when value has changed
          />
          <button disabled={this.props.date == null} type="submit" className="calendar-btn">
          <img src={calimg} alt={"calnimg"} height= "25px" className="cal-icon"/>
          </button>
        </form>
      </div> 
      );
    }
  }
 
export default Datepicker;