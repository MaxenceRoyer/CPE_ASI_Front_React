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
    this.onChangeTitle=this.onChangeTitle.bind(this);
    this.onChangeDescription=this.onChangeDescription.bind(this);
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

  updateSlidInfo(){
    const tmpSlid={id:this.props.id,
      title:this.props.title,
      description:this.props.description,
      content_id:this.props.content.id};
    this.props.dispatch(setSelectedSlid(tmpSlid));
  }

  onChangeTitle(event){
    this.setState({title: event.target.value})
  }

  onChangeDescription(event){
    this.setState({description: event.target.value})
  }
   

displayEditMeta(){

  

  let array_render = [];

  switch(this.props.displayMode) {
    case "FULL_MNG":
    array_render.push(
      <EditMetaSlid 
        handleChangeTitle = {this.props.onChangeTitle}                     
        title = {this.props.title}
        handleChangeTxt = {this.props.onChangeDescription}            
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
        <h1>{this.props.title}</h1>
        <span>{this.props.description}</span>
        <ContentSimple
              src={this.props.content.src}
              type={this.props.content.type}
        />
        {display}
      </div>
    );
  }

}
export default  connect()(Slid);
