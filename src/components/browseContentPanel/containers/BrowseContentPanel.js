import React, { Component } from 'react';
import './browseContentPanel.css';
import * as jsonSource from '../../../sources/contentMap.json';
import ContentSimple from '../../common/content/containers/contentDisplay/ContentSimple';
import ContentInfos from '../../common/content/containers/contentDisplay/ContentInfos';

class BrowseContentPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contentMap: jsonSource
    };
  }

  getAllContents() {
    let array_render = [];

    for(var i = 0; i < this.state.contentMap.contents.length; i++) {
        switch(this.state.contentMap.contents[i].onlyContent) {
          case "true":
            array_render.push(<ContentInfos
              key={this.state.contentMap.contents[i].id.toString()}
              id={this.state.contentMap.contents[i].id}
              title={this.state.contentMap.contents[i].title}
              src={this.state.contentMap.contents[i].src}
              onlyContent={this.state.contentMap.contents[i].onlyContent}
              type={this.state.contentMap.contents[i].type}
              />);
            break;
          case "false":
          array_render.push(<ContentSimple
            key={this.state.contentMap.contents[i].id.toString()}
            src={this.state.contentMap.contents[i].src}
            type={this.state.contentMap.contents[i].type}
            />);
            break;
        }
        array_render.push(<br />);
    }
    return array_render;
  }

  render() {
    let display = this.getAllContents();
    return (
      <div className="field_set">
        <div className="card" width="100%">
          <legend>Drop files here</legend>
        </div>
        <div className="BrowseContentPanel">
          <hr />
          {display}
          </div>
        </div>);
  }

}
export default BrowseContentPanel;

