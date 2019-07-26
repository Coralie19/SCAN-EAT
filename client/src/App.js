import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from '../src/containers/Home/home';
import Scan from '../src/containers/Scan/scan';
import Products from '../src/containers/Products/products'


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component = {Home} />
        <Route path="/scan" component = {Scan} />
        <Route path="/products" component = {Products} />
      </Router>
    </div>
  );
}

export default App;
