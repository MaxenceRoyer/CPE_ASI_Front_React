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
            <div className='col-xs-12 col-md-3 col-lg-3 height-100 vertical-scroll'>
                <BrowseContentPanel/>
            </div>
            <div className='col-xs-12 col-md-6 col-lg-6 height-100'>
            </div>
            <div className='col-xs-12 col-md-3 col-lg-3 height-100'>
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
                  type="img"
                  onlyContent="true"
                />
                <br />
                <Content
                  id="4"
                  src="https://www.youtube.com/embed/3TovcF1j3bE"
                  type="video"
                  title="My Video"
                  onlyContent="false"
                />
                <br />
                <Content
                  id="5"
                  type="blbl"
                  title="My Unsupported"
                  onlyContent="true"
                />
              <br />
              <Content
                src="http://www.lemonde.fr/pixels/article/2015/09/29/l-ordinateur-quantique-de-la-nasa-et-de-google-double-ses-capacites_4776963_4408996.html"
                type="web"
                onlyContent="true"
              />
              <br />
            </div>
        </div>
    </div>);
  }

}
export default Main;
