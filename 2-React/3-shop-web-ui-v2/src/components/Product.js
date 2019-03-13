import React, { Component } from 'react';
import classNames from 'classnames'
import Review from './Review';

class Product extends Component {

    constructor() {
        super();
        this.state = {
            currentTab: 1,
            reviews: [
                { stars: 1, author: 'whow@mail.com', body: 'sample review-1' },
                { stars: 3, author: 'whow@mail.com', body: 'sample review-2' }
            ]
        }
    }

    changeTab(e, tabIndex) {
        e.preventDefault();
        this.setState({ currentTab: tabIndex })
    }
    handleBuy(e) {
        let { value, onBuy } = this.props;
        if (onBuy)
            onBuy({ item: value, qty: 1 })
    }
    renderBuyBtn(product) {
        if (product.canBuy) return (<button onClick={e => this.handleBuy(e)} className="btn btn-sm btn-info">buy</button>)
        else return null;
    }
    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((review, idx) => {
            return <Review value={review} key={idx} />
        })
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
                panel = (<div>{this.renderReviews()}</div>)
                break;
            }
            default: {
                panel = null;
            }
        }
        return panel;
    }

    render() {
        let { value: product } = this.props;
        let { currentTab } = this.state;
        return (
            <div>
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
        );
    }
}

export default Product;