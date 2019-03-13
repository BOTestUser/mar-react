import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
    constructor() {
        super();
        this.state = {
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
    renderProducts() {
        let { products } = this.state;
        return products.map((product, idx) => {
            return (
                <div key={idx} className="list-group-item">
                    <Product value={product} onBuy={e => this.props.onBuy(e)} />
                </div>
            )
        });
    }
    render() {
        return (
            <div>
                {this.renderProducts()}
            </div>
        );
    }
}

export default ProductList;