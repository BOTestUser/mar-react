import React, { Component } from 'react';
import classNames from 'classnames'

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentTab: 1,
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
  changeTab(e, tabIndex) {
    e.preventDefault();
    this.setState({ currentTab: tabIndex })
  }
  renderBuyBtn(product) {
    if (product.canBuy) return (<button className="btn btn-sm btn-info">buy</button>)
    else return null;
  }
  renderTabPanel(product) {
    let { currentTab } = this.state;
    let panel;
    switch (currentTab) {
      case 1: {
        panel = (<div>{product.description}</div>)
        break;
      }
      case 2: {
        panel = (<div>Not yet</div>)
        break;
      }
      case 3: {
        panel = (<div>None Yet</div>)
        break;
      }
      default: {
        panel = null;
      }
    }
    return panel;
  }
  renderProducts() {
    let { products, currentTab } = this.state;
    return products.map((product, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3">
              <img src={product.image} className="img-fluid" alt={product.name} />
            </div>
            <div className="col-9 col-sm-9 col-md-9">
              <h5>{product.name}</h5>
              <h6>&#8377;{product.price}</h6>
              {this.renderBuyBtn(product)}
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a onClick={e => this.changeTab(e, 1)} className={classNames('nav-link', { active: currentTab === 1 })} href="/">Description</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(e, 2)} className={classNames('nav-link', { active: currentTab === 2 })} href="/">Specification</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(e, 3)} className={classNames('nav-link', { active: currentTab === 3 })} href="/">Reviews</a>
                </li>
              </ul>
              {this.renderTabPanel(product)}
            </div>
          </div>
        </div>
      )
    });
  }
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">online-shoppig</a>
        </nav>
        <hr />
        <hr />
        {this.renderProducts()}
      </div>
    );
  }
}

export default App;
