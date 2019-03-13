import React, { Component } from 'react';
import { buy } from '../actions/cart'

import store from '../store'

class CartView extends Component {
    constructor() {
        super();
        this.state = {
            cart: [],
        } 
    }

    componentDidMount() {
        let cart = store.getState().cart;
        this.setState({ cart })
        this.unsubscribe = store.subscribe(() => {
            let cart = store.getState().cart;
            this.setState({ cart })
        })
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    renderCartItems() {
        let { cart } = this.state;
        return cart.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>qty</td>
                    <td>total</td>
                    <td><i onClick={e => store.dispatch(buy(item, 1))} className="fa fa-plus"></i></td>
                </tr>
            )
        })
    }
    render() {

        return (
            <div className="card">
                <div className="card-header">Your Cart</div>
                <div className="card-body">
                    <table className="table table-sm table-bordered">
                        <tbody>
                            {this.renderCartItems()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="4">Total: 0.0</td>
                            </tr>
                        </tfoot>
                    </table>
                    <button className="btn btn-danger">checkout</button>
                </div>
            </div>
        );
    }
}

export default CartView;