import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import btnimg from '../../assets/btn-nobg.png';


class Button extends Component {
  
  render() { 
    return ( 
    <div className="btn-scan">
      <ul>
          <li>
            <Link to="/scan">
              <button>scan code</button>
              {/* <img src={btnimg} alt={"btnimg"} height= "60px"/> */}
            </Link>            
          </li>
        </ul>
    </div>
     );
  }
}
 
export default Button;