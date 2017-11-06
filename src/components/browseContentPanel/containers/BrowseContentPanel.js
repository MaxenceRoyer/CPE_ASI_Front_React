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

  getAllRobotRender() {
    let array_render = [];

    for(var i = 0; i < this.state.contentMap.contents.length; i++) {
        switch(this.state.contentMap.contents[i].onlyContent) {
          case "true":
            array_render.push(<ContentInfos
              id={this.state.contentMap.contents[i].id}
              title={this.state.contentMap.contents[i].title}
              src={this.state.contentMap.contents[i].src}
              onlyContent={this.state.contentMap.contents[i].onlyContent}
              type={this.state.contentMap.contents[i].type}
              />);
            break;
          case "false":
          array_render.push(<ContentSimple
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
    let display = this.getAllRobotRender();
    return (<div className="BrowseContentPanel">
              <div className="form-group row">
                <label for="title-input" className="col-2 col-form-label">Title</label>
                <div className="col-12">
                  <input className="form-control" type="text" value="" id="title-input" />
                </div>
                <label for="description-input" className="col-2 col-form-label">Description</label>
                <div className="col-12">
                  <input className="form-control" type="text" value="" id="description-input" />
                </div>
              </div>
              <hr />
              {display}
            </div>);
  }

}
export default BrowseContentPanel;
0
