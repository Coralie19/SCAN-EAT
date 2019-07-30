import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Barcodescan from '../../components/Barcodescan';
import Item from '../../components/Item';
import Datepicker from '../../components/Datepicker';
import listimg from '../../assets/list.svg';


class Scan extends Component {

  state = {
    scanning: true, //scanner on by default
    results: [],
    routeURL: 'http://127.0.0.1:4000/scan',
    date: new Date(),
  };

  // result is the scanned EAN13 code & Product is the related product fetched from Open Food API
  onDetected = (result) => {
    if (this.state.scanning) {
      this.setState({ scanning: false }); // stop scanning when it gets a result
      console.log(result)
      fetch(`https://world.openfoodfacts.org/api/v0/product/${result.codeResult.code}.json`)
        .then(response => response.json())
        .then(product => {
          console.log('product', product); //to remove
          if (product && product.status_verbose === 'product found') {
          console.log(product.product.product_name, product.product.categories); //to remove
          this.setState({results: { 
            name : product.product.product_name, 
            category : product.product.categories, 
            id : product.code,
            expiry_date : this.state.date // date will be updated with the date picker
           }}) 
        } else {
          this.setState({ scanning: true });
          console.log('in case of code error', this.state.scanning)
          }
      }) 
        .catch(console.error.bind(console)) 
    }
  }


  //Set the expiry date in the state
  onSelect = newDate => {
    this.setState({results: { 
      ...this.state.results,
      expiry_date: newDate 
     }}, () => console.log('The last state date is: ', this.state.results.expiry_date)) 
  }



 //Add item with all info in db
 addItem = (item) => {
  item = this.state.results;
  fetch(`${this.state.routeURL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
    })
  .then(res => this.props.history.push('/products'))
  .catch(console.error.bind(console))
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


  // Render the item if the API returns a match
  renderProductDetails = () => {
    return (
      <div>
        <Item name={this.state.results.name} category={this.state.results.category} id={this.state.results.id} cancelItem={this.cancelItem} />
        <Datepicker date={this.state.date} onSelect={this.onSelect} addItem={this.addItem} /> 
      </div>
    )
  } 

  // Render the item if the API returns a match
  // renderProductNotFound = () => {
  //   console.log(this.product_name)
  //   console.log(this.state.scanning)
  //     this.setState ({
  //       scanning: true,
  //     })
  //     console.log(this.state.scanning)
  // } 


  render() { 
    return ( 
      <div className="scan-page">
        <div className="header">
          <h1>Let's scan</h1> 
          <div className="btn-header module-border-wrap">
            <ul className="module">
              <li>
                <Link to="/products">
                <button>
                  <img src={listimg} alt={"listimg"} height= "40px" className="list-icon"/>
                </button>
                </Link>            
              </li>
            </ul>
          </div>
        </div>
        
        <Barcodescan onDetected={this.onDetected} />
        {this.state.results.id && this.renderProductDetails()}
      </div>
    );
  }
}
 
export default Scan;