import React, { Component } from 'react';
import * as jsonSource from '../../../sources/contentMap.json';
import Slid from '../../common/slid/containers/Slid';
import {connect } from 'react-redux';

class EditSlidPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      contentMap : jsonSource,
      firstTime:0
      //selected_slid : this.props.selected_slid

    };
  }
  

  getSlid() {
    let array_render = [];
    //selected_slide = {this.props.selectedSlid};
      /*array_render.push(<Slid
        content={this.state.contentMap.contents[this.props.selectedSlid]}
        title={this.state.contentMap.slids[this.props.selectedSlid].title}
        description={this.state.contentMap.slids[this.props.selectedSlid].description}
        displayMode="FULL_MNG"
      />);*/
     let content_id = this.props.selected_slid.content_id;
     console.log(content_id);
     if(this.state.firstTime==0)
     {
        array_render.push(<br />);
        this.state.firstTime=1;
     }
     else{
      array_render.push(<Slid
        content={this.state.contentMap.contents[content_id-1]}
        title={this.props.selected_slid.title}
        description={this.props.selected_slid.description}
        displayMode="FULL_MNG"
      />);
      //array_render.push(this.props.selected_slid);
      array_render.push(<br />);
      
    }
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
const mapStateToProps = (state, ownProps) => {
  return {
    selected_slid: state.selectedReducer.slid,
  } };
 export default connect(mapStateToProps)(EditSlidPanel);
