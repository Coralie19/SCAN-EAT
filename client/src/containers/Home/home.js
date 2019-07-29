import React, { Component } from 'react';
import Button from '../../components/Button';
import Img from '../../img-placeholder.jpg';

class Home extends Component {
  state = {  }
  render() { 
    return ( 
    <div className="home">
      <h1>Home page</h1>
      <img src={Img} alt={"Img"} height= "200px" className="home-img" />
      <h2>Lorem ipsum</h2>
      <h3>Lorem ipsum</h3>
      <p>mock text to replace with real text</p>
      <Button />

    </div> );
  }
}
 
export default Home;