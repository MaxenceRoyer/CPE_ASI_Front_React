import React, { Component } from 'react';
import './slid.css';
import * as jsonSource from '../../../sources/contentMap.json';

class Slid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contentMap: jsonSource
    };
  }

  render() {
    //var i = this.props.slidId;
    var i = 1;
    return (<div>

        array_render.push(<ContentInfos
          id={this.state.contentMap.contents[i].id}
          title={this.state.contentMap.contents[i].title}
          src={this.state.contentMap.contents[i].src}
          onlyContent={this.state.contentMap.contents[i].onlyContent}
          type={this.state.contentMap.contents[i].type}
          />);
    </div>);
  }

}
export default Slid;
