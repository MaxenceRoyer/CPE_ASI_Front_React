import React, { Component } from 'react';

class VisuelSimple extends Component {
	constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (<div>
							<div className="card" width="100%">
								<img className="card-img-top" src={this.props.src} />
							</div>
						</div>);
  }

}
export default VisuelSimple;
