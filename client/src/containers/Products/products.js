import React, { Component } from 'react';
import Itemlist from './../../components/Itemlist';
import Button from './../../components/Button';

class Products extends Component {
  constructor (props) {
    super (props);
    this.state = { 
      items : []
    }
  }

  componentDidMount () {
    //fetch
    // db.collection('items').get().then( (snapshot) => {
    //   console.log(snapshot.docs)
    // })
  }

  addItem = () => {
    //add
  }

  deleteItem = (code) => {
    // delete from db
  }
  
  render() { 
    return ( 
      <div>
        <h1>Products page</h1>
        <Itemlist items={this.state.items} deleteTopic={this.deleteItem} />
        <Button />
      </div>
      );
    }
  }
 
export default Products;