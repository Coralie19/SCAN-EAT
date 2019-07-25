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
      date: new Date()
    };
  }

  handleSelect = date => {
    this.setState({
      date: date
    });
  }

  handleChange = (event) => {
    this.props.storeDate(event.target.value);
  }


  render() { 
    return ( 
      <form>
        <DatePicker
          // locale="es"
          selected={this.state.date}
          onSelect={this.handleSelect} //when day is clicked
          onChange={this.handleChange} //only when value has changed
          // onClickOutside={} //close todo
          // highlightDates={[addDays(new Date(), 7)]}
        />
      </form>
      );
  }
}
 
export default Datepicker;