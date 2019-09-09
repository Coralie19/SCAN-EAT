import React, { Component } from 'react';
import Quagga from 'quagga';
import captureimg from '../../assets/capture.svg';


class Barcodescan extends Component {

  constructor (props) {
    super (props);
    this._onDetected = this._onDetected.bind(this);
}

componentDidMount() {
  Quagga.init(
    {
      inputStream: {
        type: 'LiveStream',
        constraints: {
          width: 640, 
          height: 380, 
          facingMode: 'environment', 
        },
      },
      locator: {
        patchSize: 'medium',
        halfSample: true,
      },
      numOfWorkers: 0,  
      decoder: {
        readers: ['ean_reader'],
      },
      locate: true,
    },
    function(err) {
      if (err) {
        return console.log(err);
      }
      Quagga.start();
    });
    Quagga.onDetected(this._onDetected);
  }  

  componentWillUnmount() {
    Quagga.offDetected(this._onDetected);
  }

  _onDetected(result) {
    this.props.onDetected(result);
  }


  render() { 
    return (
      <div>
        <img src={captureimg} alt={"captureimg"} height= "360px" className="upper-img"/>
        <div id="interactive" className="viewport" />  
      </div> 
    );
  }
}
 
export default Barcodescan;
