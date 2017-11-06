import React, { Component } from 'react';
import VisualImg from '../visuel/VisualImg';
import VisualVideo from '../visuel/VisualVideo';
import VisualWeb from '../visuel/VisualWeb';

class ContentInfos extends Component {
	constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
		let array_render = [];
		switch(this.props.type) {
			case "img":
				array_render.push(<VisualImg src={this.props.src} />);
				break;
			case "img_url":
				array_render.push(<VisualImg src={this.props.src} />);
				break;
			case "video":
				array_render.push(<VisualVideo src={this.props.src} />);
				break;
			case "web":
				array_render.push(<VisualWeb src={this.props.src} />);
				break;
			default:
				array_render.push(<center><h1>Unsupported</h1></center>)
				break;
		}
    return (<div>
				<div className="card" width="100%">
					{array_render}
					<div className="card-body">
						<h5 className="card-title">[ID:{this.props.id}] {this.props.title}</h5>
					</div>
				</div>
			</div>);
  }
}
export default ContentInfos;
