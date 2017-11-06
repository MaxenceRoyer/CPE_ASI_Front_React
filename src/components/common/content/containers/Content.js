import React, { Component } from 'react';
import ContentSimple from './contentDisplay/ContentSimple';
import ContentInfos from './contentDisplay/ContentInfos';
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
        array_render.push(<ContentInfos
          id={this.props.id}
          src={this.props.src}
          title={this.props.title}
          type={this.props.type} />);
        break;
      case "true":
        array_render.push(<ContentSimple src={this.props.src} type={this.props.type} />);
        break;
    }

    return (
      <div>{array_render}</div>
    );
  }

}
export default Content;
