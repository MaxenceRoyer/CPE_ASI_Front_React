import React, { Component } from 'react';

class VisuelInfo extends Component {
	constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (<div>
				<div className="card" width="100%">
					<img className="card-img-top" src={this.props.src} />
					<div className="card-body">
						<h5 className="card-title">[ID:{this.props.id}] {this.props.title}</h5>
					</div>
				</div>
			</div>);
  }
}
export default VisuelInfo;
