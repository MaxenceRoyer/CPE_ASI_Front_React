import React, { Component } from 'react';
import './slid.css';
import ContentInfos from '../../content/containers/contentDisplay/ContentInfos';
import ContentSimple from '../../content/containers/contentDisplay/ContentSimple';

class Slid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title : this.props.title,
      descrition : this.props.description
    };
  }

  callContentInfos()
  {
    let array_render = [];
    
          array_render.push(
            <ContentInfos
            id={this.props.content.id}
            title={this.props.content.title}
            src={this.props.content.src}
            onlyContent={false}
            type={this.props.content.type}
            />
          );
     
        return array_render;
  }

  render() {
    //var i = this.props.slidId;
    return (
    <div className="card" width="100%">
      <h1>{this.state.title}</h1>
      <span>{this.state.description}</span>
      <ContentSimple
            src={this.props.content.src}
            type={this.props.content.type}
            />
    </div>);
  }

}
export default Slid;
