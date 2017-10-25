import React, { Component } from 'react';
import './lib/bootstrap/css/bootstrap.min.css';
import './App.css';
import Main from './components/mainPanel/Main';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (<Main/>);
  }

}
export default App;
