import React, { Component } from 'react';
import CartView from './components/CartView';
import Home from './components/Home';
import ProductList from './components/ProductList';
import NotFound from './components/NotFound';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import CartBadge from './components/CartBadge';

class App extends Component {


  render() {

    return (
      <div className="container">
        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">online-shoppig</a>
        </nav>
        <hr />

        <CartBadge />

        <Router>
          <div>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
            </ul>
            <hr />
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/products" render={() => <ProductList />} />
              <Route path="/cart" render={() => <CartView />} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
