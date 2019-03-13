import React, { Component } from 'react';
import { connect } from 'react-redux'

//---------------------------------------
// way-1 : class syntax
//---------------------------------------
// class CartBadge extends Component {
//     render() {
//         let { cart } = this.props;
//         return (
//             <div>
//                 <i className="fa fa-shopping-cart"></i>
//                 &nbsp;<span className="badge badge-danger">{cart.length}</span> item(s) in cart
//                 <hr />
//             </div>
//         );
//     }
// }


//---------------------------------------
// way-2 : function syntax
//---------------------------------------

function CartBadge(props) {
    let { cart } = props;
    return (
        <div>
            <i className="fa fa-shopping-cart"></i>
            &nbsp;<span className="badge badge-danger">{cart.length}</span> item(s) in cart
        <hr />
        </div>
    )
}


const mapStateToProps = (state, props) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(CartBadge);