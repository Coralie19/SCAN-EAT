import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Barcodescan from '../../components/Barcodescan';
import Item from '../../components/Item';
import Datepicker from '../../components/Datepicker';
//import moment from 'moment';


class Scan extends Component {

  state = {
    scanning: true, //scanner on by default
    results: [],
    routeURL: 'http://127.0.0.1:4000/scan',
    date: new Date(),
  };

  // result is the scanned EAN13 code & Product is the related product fetched from Open Food API
  onDetected = (result) => {
    console.log(this.state)
    if (this.state.scanning) {
      this.setState({ scanning: false }); // stop scanning when it get a result
      console.log(result)
      fetch(`https://world.openfoodfacts.org/api/v0/product/${result.codeResult.code}.json`)
        .then(response => response.json())
        .then(product => {
          console.log(product.product.product_name, product.product.categories); 
          // pass the product info to item
          this.setState({results: { 
            name : product.product.product_name, 
            category : product.product.categories, 
            id : product.code,
            expiry_date : this.state.date // moment(this.state.date).format("MMMM Do, YYYY")  //to be updated with the date picker
           }}) 
          console.log('after on detect', this.state)      
        })
        .catch(console.error.bind(console)) // new
    }
  }


  //Set the expiry date in the state
  onSelect = newDate => {
    console.log('the passed newdate arg is:', newDate); //ok
    this.setState({ 
      date: newDate //moment(newDate).format("MMMM Do, YYYY")
    }, () => console.log('The updated state date is: ', this.state.date)); //ok
  }

    // this.setState({results: { 
    //   expiry_date : this.state.date //to be updated with the date picker
    //  }}, () => console.log('The last state date is: ', this.state.results.expiry_date)) // try 
    // }


 //Add item with all info

 addItem = (item) => {
  item = this.state.results;
  console.log('item to post in db', item)
  fetch(`${this.state.routeURL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
    })
  .then(res => res.json())
  .catch(console.error.bind(console))
}

  // Days left before expiry
  daysBeforeExpiry = () => {
    let difference = this.state.date - new Date();
    return difference;
  }

  //cancel item (not wipping state back to empty, but working because rewrite)
  cancelItem = (id) => {
    console.log('cancelled item id:', this.state.results.id)
    this.setState ({
      scanning: true,
      results: []
    })
    console.log('state after cancel', this.state.results)
  }

  

  // Render the item if match
  renderProductDetails = () => {
    return (
      <div>
        <Item name={this.state.results.name} category={this.state.results.category} id={this.state.results.id} cancelItem={this.cancelItem} />
        <Datepicker date={this.state.date} onSelect={this.onSelect} addItem={this.addItem} /> 
      </div>
    )
  } 


  render() { 
    
    return ( 
      <div>
        <div>
          <ul>
            <li>
              <Link to="/products">
              <h5>My list</h5>
              </Link>            
            </li>
          </ul>
        </div>
        <h1>Scan page</h1> 
        <Barcodescan onDetected={this.onDetected} />
        {this.state.results.name && this.renderProductDetails()}
      </div>
    );
  }
}
 
export default Scan;