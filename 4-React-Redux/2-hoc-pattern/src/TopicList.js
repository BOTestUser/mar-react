import React, { Component } from 'react';

// import store from './store'

import { connectWithStore } from './hoc'

class TopicList extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         topics: store.getState().topics
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
            <div>
                {
                    this.props.data.map((topic, idx) => {
                        return (
                            <div className="list-group-item">{topic}</div>
                        )
                    })
                }
            </div>
        );
    }
}

export default connectWithStore(TopicList, state => state.topics);