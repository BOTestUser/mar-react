import React, { Component } from 'react';
import Product from './Product';

import { connect } from 'react-redux'
import { loadProducts } from '../actions/products'

class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        this.props.loadProducts('elec', 100);
    }
    renderProducts() {
        let { products } = this.props;
        return products.map((product, idx) => {
            return (
                <div key={idx} className="list-group-item">
                    <Product value={product} />
                </div>
            )
        });
    }
    render() {
        return (
            <div>
                {this.props.status.message ? <div className="alert alert-warning">{this.props.status.message}</div> : null}
                <hr />
                {this.renderProducts()}
            </div>
        );
    }
}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
        products: state.products,
        status: state.status
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadProducts: (type, size) => dispatch(loadProducts(type, size))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);