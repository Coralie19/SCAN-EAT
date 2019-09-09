import React, { Component } from 'react';
import Itemlist from '../../components/Itemlist';
import Button from '../../components/Button';
 

class Products extends Component {
  constructor (props) {
    super (props);
    this.state = { 
      items : [],
      baseURL: 'http://localhost:4000/'
    }
  }

  componentDidMount () {
    // get products
    fetch(`${this.state.baseURL}products`)
    .then(res => res.json())
    .then(items => this.setState({items: this.sortByDate(items)}))
  }
  
  sortByDate = items => {
    return items.sort((a,b) => new Date(a.expiry_date) - new Date(b.expiry_date))
  }

  // //to do (map)
  // daysBeforeExpiry = items => {
  //   let difference = this.state.date - new Date(); //map sur items
  //   return difference;
  // }


  deleteItem = (id) => {
    fetch(`${this.state.baseURL}products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => this.setState({items : this.state.items.filter(item => item._id !== id)}))
  }
  
  render() { 
    return ( 
      <div className="products-page">
        <div className="header">
          <h1>Let's eat</h1>
          <Button />
        </div>
        <div className="products-list">
          <Itemlist items={this.state.items} deleteItem={this.deleteItem} />
        </div>
        <div className="footer"></div>
      </div>
      );
    }
  }
 
export default Products;