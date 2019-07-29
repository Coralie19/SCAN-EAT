import React, { Component } from 'react';
import Barcodescan from '../../components/Barcodescan';
import Item from '../../components/Item';
import Datepicker from '../../components/Datepicker';

class Scan extends Component {

  state = {
    scanning: true, //scanner on by default
    results: [],
    routeURL: 'http://127.0.0.1:4000/scan',
    date: null
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
            expiry_date : this.state.date //date to update with the date picker
           }}) 
          console.log('after on detect', this.state)
          
        })
    }
  }


  //Set the expiry date in the state
  onSelect = newDate => {
    console.log('the passed newdate arg is:', newDate) //ok
    this.setState({ 
      date: newDate 
    }); // not working
    console.log('The updated state date is: ', this.state.date) //not updated
    console.log('The updated expiry date is: ', this.state.results.expiry_date) //not updated
  }


  //Add item with all info - to launch on click
  addItem = (result) => {
    
    fetch(`${this.state.routeURL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(result)
      })
    .then(res => res.json())
    .then(result => {
      console.log('done', result)
    })
    .catch(console.error.bind(console))
  }

  //invoke it on condition with this.state.results
  

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
        <h1>Scan page</h1> 
        <Barcodescan onDetected={this.onDetected} />
        {this.state.results.name && this.renderProductDetails()}
      </div>
    );
  }
}
 
export default Scan;