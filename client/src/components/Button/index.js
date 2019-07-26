import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Button extends Component {
  state = {  }
  render() { 
    return ( 
    <div>
      <h2>btn compo</h2>
      <ul>
          <li>
            <Link to="/scan">Btn</Link>
          </li>
        </ul>
    </div>
     );
  }
}
 
export default Button;