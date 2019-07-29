import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { Redirect } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";

// import {registerLocale} from 'react-datepicker';
// import es from 'date-fns/locale/es';
// registerLocale('es', es)


class Datepicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  //Redirection to Products page
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/products' />
    }
  }


  //Setting the expiry date:
  handleChange = date => {
    console.log('handleChange date', date) //ok
    this.props.onSelect(date);
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('handleSubmit happening with event', event) // ok
  }

  onClick = (event) => {
    this.handleSubmit(event);
    this.setRedirect();
    //this.props.addItem()
  }

  render() { 
    return ( 
      <div>
      {this.renderRedirect()}
      <form onSubmit={this.onClick}>
        <DatePicker
          // locale="es"
          selected={this.props.date}
          onChange={this.handleChange} //when value has changed
          // onClickOutside={} //close todo if time
        />
        <button disabled={this.props.date == null} type="submit">Add</button>
      </form>
      </div>
      );
  }
}
 
export default Datepicker;