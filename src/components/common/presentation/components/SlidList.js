import React, { Component } from 'react';
//import * as jsonSource from '../../../../sources/contentMap.json';
import Slid from '../../slid/containers/Slid';
import { connect } from 'react-redux';

class SlidList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //contentMap : jsonSource
      contentMap : this.props.contentMap
    };
  }

  getAllSlid() {
    let array_render = [];

    if(this.props.contentMap == null){}
    else{
    
    for(var i = 0; i < this.props.contentMap.slids.length; i++) 
    {
      var idImage = this.props.contentMap.slids[i].idImage;
      array_render.push(<Slid
        content={this.state.contentMap.contents[i]}
        //content_id={this.state.contentMap.contents[i].id}
        title={this.props.contentMap.slids[i].title}
        description={this.props.contentMap.slids[i].description}
        displayMode="SHORT"
      />);
      array_render.push(<br />);
    }
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


const mapStateToProps = (state, ownProps) => {
  return {
    contentMap: state.updateModuleReducer.contentMap,
  } 
};
 export default connect(mapStateToProps)(SlidList);
