import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '../../components/Button';
import Img from '../../assets/img-placeholder.jpg';
import listimg from '../../assets/list.svg';


class Home extends Component {
  state = {  }
  render() { 
    return ( 
    <div className="home">
      <div className="scan-page">
        <div className="header">
          <h1>Let's start</h1> 
          <div className="btn-header">
            <ul>
              <li>
                <Link to="/products">
                <button>
                  <img src={listimg} alt={"listimg"} height= "40px" className="list-icon"/>
                </button>
                </Link>            
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="home-img">
        <img src={Img} alt={"Img"} height= "200px" className="home-img" />
      </div>
      <div>
        <h3>Avoid wasting food</h3>
        <h3 className="h3-light">Scan your products' barcodes</h3>
        <h3 className="h3-light">And keep track of the expiration dates</h3>
      </div>
      <Button />
    </div> );
  }
}
 
export default Home;