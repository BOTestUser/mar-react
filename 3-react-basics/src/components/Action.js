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
        let { onAction, value } = this.props;
        if (onAction)
            onAction({ value: value * count });
    }
    render() {
        let { value } = this.props;
        let { count } = this.state;

        let className = value < 0 ? 'btn btn-warning' : 'btn btn-success';

        return (
            <div className="action">
                <div className="card card-body">
                    <button onClick={e => this.incrementCount()} className={className}>{value}</button>
                    &nbsp;&nbsp;
                    <span className="badge badge-dark">{count}</span>
                </div>
            </div>
        );
    }
}

export default Action;