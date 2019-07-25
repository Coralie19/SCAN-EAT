import React, { Component } from 'react';
import Itemlist from './../../components/Itemlist';
import Button from './../../components/Button';

class Products extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <h1>Products page</h1>
        <Itemlist />
        <Button />
      </div>
      );
    }
  }
 
export default Products;