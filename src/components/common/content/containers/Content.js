import React, { Component } from 'react';
import VisualSimple from './visuel/VisuelSimple';
import VisuelInfo from './visuel/VisuelInfo';
import './content.css';

class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let array_render = [];
    switch(this.props.onlyContent) {
      case "false":
        array_render.push(<VisuelInfo
          id={this.props.id}
          src={this.props.src}
          title={this.props.title} />);
        break;
      case "true":
        array_render.push(<VisualSimple src={this.props.src} />);
        break;
    }

    return (
      <div>{array_render}</div>
    );
  }

}
export default Content;
