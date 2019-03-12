import React, { Component } from 'react';
import Action from './Action';
import Summary from './Summary';

class ActionBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCount: 0
        }
    }
    incrementTotalCount(e) {
        let { totalCount } = this.state;
        totalCount += e.value;
        this.setState({ totalCount })
    }
    renderActions() {
        let numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 1, -2, 3, -4, 5, -6, 7, -8, 9, -10]
        return numbers.map((n, idx) => <Action key={idx} value={n} onAction={e => this.incrementTotalCount(e)} />)
    }
    render() {
        let { totalCount } = this.state;
        return (
            <div className="card">
                <div className="card-header">Action Box  : <span className="badge badge-warning">{totalCount}</span> </div>
                <div className="card-body">

                    {/* 
                    <Action value={1} onAction={e => this.incrementTotalCount(e)} />
                    <Action value={-1} onAction={e => this.incrementTotalCount(e)} /> 
                    */}

                    {this.renderActions()}

                    <div style={{ clear: 'both' }}>
                        <Summary value={totalCount} />
                    </div>


                </div>
            </div>
        );
    }
}

export default ActionBox;