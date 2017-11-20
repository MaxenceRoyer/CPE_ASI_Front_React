import React, { Component } from 'react';
import * as jsonSource from '../../../../sources/contentMap.json';
import Slid from '../../slid/containers/Slid';

class SlidList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contentMap : jsonSource
    };
  }

  getAllSlid() {
    let array_render = [];

    for(var i = 0; i < this.state.contentMap.slids.length; i++) 
    {
      var idImage = this.state.contentMap.slids[i].idImage;
      array_render.push(<Slid
        content={this.state.contentMap.contents[i]}
        //content_id={this.state.contentMap.contents[i].id}
        title={this.state.contentMap.slids[i].title}
        description={this.state.contentMap.slids[i].description}
        displayMode="SHORT"
      />);
      array_render.push(<br />);
    }
        
    return array_render;
  }

  render() {
    let display = this.getAllSlid();
    return (
      <div>
         {display}
      </div>
    );
  }

}
export default SlidList;
