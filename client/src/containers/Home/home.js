import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '../../components/Button';
import Img from '../../assets/img-placeholder.jpg';

class Home extends Component {
  state = {  }
  render() { 
    return ( 
    <div className="home">
      <div>
      <ul>
          <li>
            <Link to="/products">
            <h5>My list</h5>
            </Link>            
          </li>
        </ul>
      </div>
      <div className="home-img">
        <img src={Img} alt={"Img"} height= "200px" className="home-img" />
      </div>
      <div>
        <h2>Lorem ipsum</h2>
        <h3>Lorem ipsum</h3>
        <p>mock text to replace with real text</p>
      </div>
      <Button />
    </div> );
  }
}
 
export default Home;