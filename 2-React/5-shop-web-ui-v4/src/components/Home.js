import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">Hello, IBM!</h1>
                    <hr className="my-4" />
                    <a className="btn btn-primary btn-lg" href="/" role="button">Learn React & Redux</a>
                </div>
            </div>
        );
    }
}

export default Home;