import React, { Component } from 'react';
import Barcodescan from '../../components/Barcodescan';
import Item from '../../components/Item';
import Datepicker from '../../components/Datepicker';

class Scan extends Component {

  state = {
    scanning: true, //scanner on by default
    results: [],
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
          console.log(product.product.product_name, product.product.categories); // then we'll pass the product info to item
          this.setState({results: { 
            name : product.product.product_name, 
            category : product.product.categories, 
            id : product.code,
            //image : product.image.selected_images.small.fr
           }}) 
          console.log(this.state)
        })
    }
  }



  pickDate = (expiryDate) => {
    // store picked date in DB
    console.log(expiryDate)
    //   this.setState({expiryDate});
    //   console.log(this.state)
  }

  cancelItem = (name) => {
    console.log('cancelled product name:', name)
    this.setState ({
    scanning: true, //scan on again
    results: [], // reset the results
    })
   // this.setState({results : this.state.results.filter(product => product.code !== code)})
  }


  renderProductDetails = () => {
    return (
      <div>
        <Item name={this.state.results.name} category={this.state.results.category} cancelItem={this.cancelItem} />
        <Datepicker pickDate= {this.pickDate}/> 
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