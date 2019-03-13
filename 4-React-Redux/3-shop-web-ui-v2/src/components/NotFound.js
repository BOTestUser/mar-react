import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <div class="jumbotron">
                    <h1 class="display-4">404! Not Found</h1>
                    <hr class="my-4" />
                    <a class="btn btn-primary btn-lg" href="/" role="button">Go Home</a>
                </div>
            </div>
        );
    }
}

export default Home;