import React, { Component } from 'react';
import './main.css';
import * as contentMapTmp from '../../sources/contentMap.json';
import BrowseContentPanel from '../browseContentPanel/containers/BrowseContentPanel';
import Content from '../common/content/containers/Content';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        contentMap:contentMapTmp,
    };
  }

  render() {
    return (
    <div className='Main container-fluid height-100'>
        <div className="row height-100">
            <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
                <BrowseContentPanel/>
            </div>
            <div className='col-md-6 col-lg-6 height-100'>
            </div>
            <div className='col-md-3 col-lg-3 height-100'>
                <Content/>
            </div>
        </div>
    </div>);
  }

}
export default Main;