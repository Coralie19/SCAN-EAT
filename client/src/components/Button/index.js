import React, { Component } from 'react';
import { Link } from "react-router-dom";
import scanimg from '../../assets/scan.svg';


class Button extends Component {
  
  render() { 
    return ( 
    <div className="btn-header module-border-wrap homepage-scan-btn">
      <ul className="module">
          <li>
            <Link to="/scan">
              <button>
              <img src={scanimg} alt={"scanimg"} height= "40px" className="list-icon"/>
              </button>
            </Link>            
          </li>
        </ul>
    </div>
     );
  }
}
 
export default Button;