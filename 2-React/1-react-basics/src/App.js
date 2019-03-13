import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Greeting from './components/Greeting'
import ActionBox from './components/ActionBox';

class App extends Component {
  constructor(props) {
    super();
    // console.log(props);
    this.state = {
      message: 'greetings'
    }
    // console.log('App :: constructor()')
  }
  changeMessage(message) {
    this.setState({ message })
  }
  render() {
    // console.log(this.props)
    // console.log('App :: render()')
    // let title = this.props.title;
    // let trainer = this.props.trainer;
    //or
    let { title, trainer } = this.props; // de-structuring ( es6 )
    let { message } = this.state;
    return (
      <div className="container">
        <hr />
        <h1><span className="badge badge-info">{title}</span></h1>
        by <span className="badge badge-dark">{trainer}</span>
        <hr />
        <ActionBox />
        <hr />
        <button onClick={e => this.changeMessage('good morning')} className="btn btn-sm btn-primary">GM</button>&nbsp;
        <button onClick={e => this.changeMessage('good noon')} className="btn btn-sm btn-primary">GN</button>&nbsp;
        <button onClick={e => this.changeMessage('good evening')} className="btn btn-sm btn-primary">GE</button>&nbsp;
        <button onClick={e => this.changeMessage('')} className="btn btn-sm btn-danger">Remove</button>&nbsp;
        <hr />
        {message ? <Greeting message={message} /> : null}
      </div>
    );
  }
  componentDidMount() {
    // console.log("App :: componentDidMount()");

    // n/w req

    // setTimeout(() => {
    //   let serverMessage = 'Hello react!';
    //   this.setState({ message: serverMessage })
    // }, 2000);
  }
  componentDidUpdate() {
    // console.log("App :: componentDidUpdate()");
  }
}

App.defaultProps = {
  trainer: 'Anonymous'
}
App.propTypes = {
  title: PropTypes.string.isRequired,
  trainer: PropTypes.string
}

export default App;
