import React from 'react';
import { connect } from 'react-redux';

import { buyProductMochaccino, buyProductCappuccino, buyProductChocolate, buyProductTea } from './actions/buyProductAction';
import './App.css';

const App = props => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IMPACTBYTE COFFEE SHOP</h1>
        <p>Balance: {props.data.balance.balance}</p>
        <h3>PRODUCTS</h3>
        <p onClick={props.buyMochaccino}>Mochaccino {props.data.product.mochaccino.stock} Rp 50000</p>
        <p onClick={props.buyCappuccino}>Cappuccino {props.data.product.cappuccino.stock} Rp 35000</p>
        <p onClick={props.buyChocolate}>Chocolate {props.data.product.chocolate.stock} Rp 25000</p>
        <p onClick={props.buyTea}>Tea {props.data.product.tea.stock} Rp 15000</p>
      </header>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state,
  }
}

// Menggunakan action yang di ada redux untuk digunakan ke komponen ini sebagai props
const mapDispatchToProps = (dispatch) => {
  return {
    buyMochaccino: () => dispatch(buyProductMochaccino),
    buyCappuccino: () => dispatch(buyProductCappuccino),
    buyChocolate: () => dispatch(buyProductChocolate),
    buyTea: () => dispatch(buyProductTea),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
