import React, { Component } from 'react';
import * as jsonSource from '../../../sources/contentMap.json';
import Slid from '../../common/slid/containers/Slid';

class ActionPresentation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contentMap : jsonSource

    };
  }

  getSlid() {
    let array_render = [];
      array_render.push(<Slid
        content={this.state.contentMap.contents[0]}
        title={this.state.contentMap.slids[0].title}
        description={this.state.contentMap.slids[0].description}
        displayMode="FULL_MNG"
      />);
      array_render.push(<br />);
        
    return array_render;
  }

  render() {
    let display = this.getSlid();
    return (
      <div>
         {display}
      </div>
    );
  }

}
export default ActionPresentation;
