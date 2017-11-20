import React, { Component } from 'react';
import './slid.css';
import ContentInfos from '../../content/containers/contentDisplay/ContentInfos';
import ContentSimple from '../../content/containers/contentDisplay/ContentSimple';
import EditMetaSlid from '../components/EditMetaSlid';

import { connect } from 'react-redux';
import {setSelectedSlid } from '../../../../actions'

class Slid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title : this.props.title,
      description : this.props.description,
      content : this.props.content
    };
    this.updateSelectedSlid=this.updateSelectedSlid.bind(this);
  }
/*
  callContentInfos()
  {
    let array_render = [];
    
          array_render.push(
            <ContentInfos
            id={this.props.content.id}
            title={this.props.content.title}
            src={this.props.content.src}
            onlyContent={false}
            type={this.props.content.type}
            />
          );
     
        return array_render;
  }
*/

/*onChangeTitle(event) {
    this.setState({title: event.target.value})
  }

  onChangeDescription(event) {
    this.setState({description: event.target.value}).bind(this)
  }*/

  updateSelectedSlid(){
    const tmpSlid={id:this.props.id,
      title:this.props.title,
      description:this.props.description,
      content_id:this.props.content.id};
    this.props.dispatch(setSelectedSlid(tmpSlid));
  }
   

displayEditMeta(){

  var onChangeTitle = function(event){
    this.setState({title: event.target.value})
  }.bind(this);

  var onChangeDescription = function(event){
    this.setState({description: event.target.value})
  }.bind(this);

  let array_render = [];

  switch(this.props.displayMode) {
    case "FULL_MNG":
    array_render.push(
      <EditMetaSlid 
        handleChangeTitle = {onChangeTitle}                     
        title = {this.props.title}
        handleChangeTxt = {onChangeDescription}            
        txt = {this.props.description}
      />);
    break;
    case "SHORT":
      array_render.push(<br />);
    break;
  }
  return array_render;
  
}

  render() {

    let display = this.displayEditMeta();

    //var i = this.props.slidId;
    return (
      <div className="card" width="100%" onClick={()=>{this.updateSelectedSlid(this.props.selected_slide)}}>
        <h1>{this.state.title}</h1>
        <span>{this.state.description}</span>
        <ContentSimple
              src={this.state.content.src}
              type={this.state.content.type}
        />
        {display}
      </div>
    );
  }

}
export default  connect()(Slid);
