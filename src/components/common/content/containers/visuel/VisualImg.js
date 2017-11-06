import React, { Component } from 'react';

class VisualImg extends Component {
	constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (<img className="card-img-top" src={this.props.src} />);
  }
}
export default VisualImg;
