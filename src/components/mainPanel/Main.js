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
            <div className='col-md-4 col-lg-3 height-100 vertical-scroll'>
                <BrowseContentPanel/>
            </div>
            <div className='col-md-4 col-lg-6 height-100'>
            </div>
            <div className='col-md-4 col-lg-3 height-100'>
                <div className="field_set">
                  <legend>Drop files here</legend>
                </div>
                <Content
                  id="1"
                  src="http://hdwallpapersrocks.com/wp-content/uploads/2013/09/3D-computer-chip-HD-wallpaper.jpg"
                  title="My computer"
                  type="img"
                  onlyContent="false"
                />
                <br />
                <Content
                  src="http://wallpapercave.com/wp/gX85E1r.jpg"
                  type="img"
                  onlyContent="true"
                />
                <br />
                <Content
                  src="http://1.bp.blogspot.com/-1bjakLciDDM/T5VqwtlXhgI/AAAAAAAAAck/mF3jkcZ1Vvo/s1600/Free-Desktop-Backgrounds-4.jpg"
                  onlyContent="true"
                />
                <br />
            </div>
        </div>
    </div>);
  }

}
export default Main;
