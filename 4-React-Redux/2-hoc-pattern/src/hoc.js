
import React, { Component } from 'react';
import store from './store'

export function connectWithStore(InputComponent, callback) {

    class Container extends Component {
        constructor() {
            super();
            this.state = {
                data: callback(store.getState())
            }
        }
        componentDidMount() {
            //
        }
        componentWillMount() {
            //
        }
        commonLogic() {
            //..
        }
        render() {
            return (
                <div>
                    <InputComponent data={this.state.data} />
                </div>
            );
        }
    }

    Container.displayName=`connect<${InputComponent.name}>`

    return Container;


}