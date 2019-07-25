import React, { Component } from 'react';
import Barcodescan from '../../components/Barcodescan';
import Item from '../../components/Item';
import Datepicker from '../../components/Datepicker';

class Scan extends Component {
  state = {  }
  render() { 
    return ( 
    <div>
      <h1>Scan page</h1>
      <Item />
      <Barcodescan />
      <Datepicker />
    </div>
    );
  }
}
 
export default Scan;