import React, { Component } from 'react';
import './lib/bootstrap/css/bootstrap.min.css';
import './App.css';
import RightSide from './components/RightSide/RightSide';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (<div className="App">
      <header className="App-title">
        <h1>Our App</h1>
      </header>
      <section>
        <section className="col-md-3">

        </section>
        <section className="col-md-6">

        </section>
        <section className="col-md-3">
          <RightSide />
        </section>
      </section>
    </div>);
  }

}
export default App;
