import React, { Component } from 'react';

class CartView extends Component {
    renderCartItems() {
        let { cart } = this.props;
        return cart.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>qty</td>
                    <td>total</td>
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