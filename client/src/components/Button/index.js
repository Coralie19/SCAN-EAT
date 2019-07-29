import React, { Component } from 'react';
import { Link } from "react-router-dom";
import btnimg from '../../btn.jpg';


class Button extends Component {
  state = {  }
  render() { 
    return ( 
    <div className="btn">
      <ul>
          <li>
            <Link to="/scan">
              <img src={btnimg} alt={"btnimg"} height= "60px"/>
            </Link>            
          </li>
        </ul>
    </div>
     );
  }
}
 
export default Button;