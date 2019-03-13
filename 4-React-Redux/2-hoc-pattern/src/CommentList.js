import React, { Component } from 'react';

// import store from './store'

import { connectWithStore } from './hoc'

class CommentList extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         comments: store.getState().comments
    //     }
    // }
    // componentDidMount() {
    //     //
    // }
    // componentWillMount() {
    //     //
    // }
    // commonLogic() {
    //     //..
    // }
    render() {
        return (
            <div style={{ backgroundColor: '#DEF', padding: '20px' }}>
                {
                    this.props.data.map((comment, idx) => {
                        return (
                            <div className="list-group-item">{comment}</div>
                        )
                    })
                }
            </div>
        );
    }
}

export default connectWithStore(CommentList, state => state.comments);