import React, { Component } from 'react';
import Button from '../../components/Button';
import Img from '../../../src/img-placeholder.PNG';

class Home extends Component {
  state = {  }
  render() { 
    return ( 
    <div>
      <h1>Home page</h1>
      <img src={Img} alt={"Img"} height= "200px" />
      <Button />
    </div> );
  }
}
 
export default Home;