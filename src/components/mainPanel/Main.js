import React, { Component } from 'react';
import './main.css';
import BrowseContentPanel from '../browseContentPanel/containers/BrowseContentPanel';
import BrowsePresentationPanel from '../browsePresentationPanel/containers/BrowsePresentationPanel';
import ActionPresentation from '../browsePresentationPanel/components/ActionPresentation';
import Content from '../common/content/containers/Content';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    var onSlidClicked = function (event){}

    return (<div className='Main container-fluid height-100'>
              <div className="row height-100">
                  <div className='col-xs-12 col-md-3 col-lg-3 height-100 vertical-scroll browseContentClass'>
                    <BrowsePresentationPanel />
                  </div>
                  <div className='col-xs-12 col-md-6 col-lg-6 height-100'>
                    <ActionPresentation />
                  </div>
                  <div className='col-xs-12 col-md-3 col-lg-3 height-100 dropFileClass'>
                    <BrowseContentPanel />
                  </div>
              </div>
          </div>);
  }

}
export default Main;
