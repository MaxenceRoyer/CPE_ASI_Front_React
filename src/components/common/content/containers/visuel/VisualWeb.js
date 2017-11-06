import React, { Component } from 'react';

class VisualWeb extends Component {
	constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (<object className="card-img-top" width="100%" height="250px" controls data={this.props.src}></object>);
  }
}
export default VisualWeb;
