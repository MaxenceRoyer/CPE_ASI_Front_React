import React, { Component } from 'react';
import './browsePresentationPanel.css';
import * as jsonSource from '../../../sources/contentMap.json';
import Presentation from '../../common/presentation/containers/Presentation';

class BrowsePresentationPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contentMap: jsonSource
    };
  }

  getAllPresentationRender() {
    let array_render = [];

    for(var i = 0; i < this.state.contentMap.contents.length; i++) 
    {
      array_render.push(<Presentation
        key = {this.state.contentMap.contents[i].id}
        content={this.state.contentMap.contents[i]}
      />);
      array_render.push(<br />);
    }
        
    return array_render;
  }

  render() {
    let display = this.getAllPresentationRender();
    return (
      <div>
         {display}
      </div>
    );
  }

}
export default BrowsePresentationPanel;
