import React, { Component } from 'react';
import './main.css';
import BrowseContentPanel from '../browseContentPanel/containers/BrowseContentPanel';
import BrowsePresentationPanel from '../browsePresentationPanel/containers/BrowsePresentationPanel';
import EditSlidPanel from '../editSlidPanel/containers/EditSlidPanel';
import Content from '../common/content/containers/Content';
import * as jsonSource from '../../sources/contentMap.json';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from '../../reducers';
import {connect } from 'react-redux';

import {updateContentMap} from '../../actions';

const store = createStore(globalReducer);

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
     // presTmp:this.props.contentTmp,,
      selected_slid_id:0,
      selected_slid:[],
      //contentMap:[]
      
    };
    contentMap:jsonSource;

    const contentMapTmp = jsonSource;//{content : this.props.contentMap.contents,
      //slids:this.props.contentMap.slids};
    store.dispatch(updateContentMap(this.props.contentMap));
  }

  render() {
    //var onSlidClicked = function (event){}

    return (
        <Provider store={store} >
            <div className='Main container-fluid height-100'>
              <div className="row height-100">
                  <div className='col-xs-12 col-md-3 col-lg-3 height-100 vertical-scroll browseContentClass'>
                    <BrowsePresentationPanel />
                  </div>
                  <div className='col-xs-12 col-md-6 col-lg-6 height-100'>
                    <EditSlidPanel />
                  </div>
                  <div className='col-xs-12 col-md-3 col-lg-3 height-100 dropFileClass'>
                    <BrowseContentPanel />
                  </div>
              </div>
          </div>
        </Provider>);
        store.dispatch(updateContentMap(this.props.contentMap));
  }

}
export default Main;
