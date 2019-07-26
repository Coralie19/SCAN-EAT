import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// import {registerLocale} from 'react-datepicker';
// import es from 'date-fns/locale/es';
// registerLocale('es', es)


class Datepicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  handleSelect = date => {
    console.log('The starting date is: ' + this.state.date);
    this.setState({
      date: date
    });
  }

  // handleChange = (value, event)  => {
  //   console.log('The event value is: ' + event.target.value)
    // this.setState({
    //   date: event.target.value
    // });
  // }

  handleSubmit = event => {
    event.preventDefault();
    console.log('The chosen date is: ' + this.state.date);
    // link to listItem page
    //this.setState({date: new Date()}); //reset not needed as we leave the page
  }

  render() { 
    return ( 
      <div>
      <form onSubmit={this.handleSubmit}>
        <DatePicker
          // locale="es"
          selected={this.state.date}
          onSelect={this.handleSelect} //when day is clicked
          onChange={this.handleChange} //only when value has changed
          // onClickOutside={} //close todo
        />
        <input type="submit" value="Add" />
      </form>
      </div>
      );
  }
}
 
export default Datepicker;