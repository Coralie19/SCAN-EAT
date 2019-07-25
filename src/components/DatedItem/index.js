import React, { Component } from 'react';

class DatedItem extends Component {

  constructor (props) {
    
    super (props);
    this.state = {
      expiryDate: ''
    }

  storeDate = (expiryDate) => {
    this.setState({expiryDate});
  }

  render() { 
    
    return (
      <div>
        {this.expiryDate}
      </div>
      )
    }
  }
}
 
export default DatedItem;