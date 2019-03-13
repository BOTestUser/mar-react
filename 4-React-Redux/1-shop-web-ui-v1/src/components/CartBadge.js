import React, { Component } from 'react';
import store from '../store'

class CartBadge extends Component {

    constructor() {
        super();
        this.state = {
            cart: [],
        }
    } 

    componentDidMount() {
        store.subscribe(() => {
            let cart = store.getState().cart;
            this.setState({ cart })
        })
    }
    render() {
        let { cart } = this.state;
        return (
            <div>
                <i className="fa fa-shopping-cart"></i>
                &nbsp;<span className="badge badge-danger">{cart.length}</span> item(s) in cart
                <hr />
            </div>
        );
    }
}

export default CartBadge;