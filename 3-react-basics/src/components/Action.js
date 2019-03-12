import React, { Component } from 'react';
import './Action.css';

class Action extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    incrementCount() {
        let { count } = this.state;
        count += 1;
        this.setState({ count })
        let { onAction } = this.props;
        if (onAction)
            onAction();
    }
    render() {
        let { value } = this.props;
        let { count } = this.state;
        return (
            <div className="action">
                <div className="card card-body">
                    <button onClick={e => this.incrementCount()} className="btn btn-primary">{value}</button>
                    &nbsp;&nbsp;
                    <span className="badge badge-dark">{count}</span>
                </div>
            </div>
        );
    }
}

export default Action;