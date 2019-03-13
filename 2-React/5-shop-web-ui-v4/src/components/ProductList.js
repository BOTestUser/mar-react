import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios';

class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        let apiUrl = 'http://localhost:8080/api/products';
        axios
            .get(apiUrl)
            .then(response => response.data)
            .then(products => {
                this.setState({ products })
            })
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