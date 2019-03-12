import React, { Component } from 'react';
import Product from './components/Product';
import CartView from './components/CartView';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isCartOpen: false,
      cart: [],
      products: [
        {
          id: 111,
          name: 'Laptop',
          price: 1000.00,
          canBuy: true,
          image: 'images/Laptop.png',
          description: 'New Mac pro'
        },
        {
          id: 222,
          name: 'Mobile',
          price: 2000.00,
          canBuy: true,
          image: 'images/Mobile.png',
          description: 'New pro'
        }
      ]
    }
  }

  toggleCart(e) {
    e.preventDefault();
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen })
  }

  addToCart(e) {
    let { item, qty } = e;
    let { cart } = this.state;
    cart = cart.concat(item);
    this.setState({ cart })
  }

  renderCart() {
    let { cart, isCartOpen } = this.state;
    if (isCartOpen)
      return <CartView cart={cart} />
  }
  renderProducts() {
    let { isCartOpen } = this.state;
    if (!isCartOpen) {
      let { products } = this.state;
      return products.map((product, idx) => {
        return (
          <div key={idx} className="list-group-item">
            <Product value={product} onBuy={e => this.addToCart(e)} />
          </div>
        )
      });
    }
  }
  render() {
    let { cart, isCartOpen } = this.state;
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">online-shoppig</a>
        </nav>
        <hr />
        <i className="fa fa-shopping-cart"></i>
        &nbsp;<span className="badge badge-danger">{cart.length}</span> item(s) in cart
        <hr />
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a onClick={e => this.toggleCart(e)} class="nav-link" href="/">{isCartOpen ? 'View products' : 'View cart'}</a>
          </li>
        </ul>
        <hr />
        <br />
        {this.renderCart()}
        {this.renderProducts()}
      </div>
    );
  }
}

export default App;
