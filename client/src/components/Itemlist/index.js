import React, { Component } from 'react';
import DatedItem from '../DatedItem';

class Itemlist extends Component {
  

  render() { 
    const item = this.props.items.map( item => { 
      return <li key={item.id}><DatedItem item={item} clickHandler={this.props.deleteItem} /></li>
    });
    
    return ( 
      <div>
        <ul>
          {item}  
        </ul> 
      </div>
    );
  }
}
 
export default Itemlist;