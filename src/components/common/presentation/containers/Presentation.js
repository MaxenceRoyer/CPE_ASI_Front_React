import React, { Component } from 'react';
import './presentation.css';
import Slid from '../../slid/containers/Slid';
import EditMetaSlid from '../components/EditMetaPres';

class Presentation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slidTitle : "Test",
      slidDescription : "Ceci est un test"
    };
  }

  onChangeTitle(event) {
    this.setState({slidTitle: event.target.value}).bind(this)
  }

  onChangeDescription(event) {
    this.setState({slidDescription: event.target.value}).bind(this)
  }

  render() {
    return (<div>
      <Slid 
        content = {this.props.content}
        title = {this.state.slidTitle}
        description = {this.state.slidDescription}
      />
      <EditMetaSlid 
        handleChangeTitle = {this.state.slidTonChangeTitleitle}                     
        title = {this.state.slidTitle}
        handleChangeTxt = {this.state.onChangeDescription}            
        txt = {this.state.slidDescription}
      />

    </div>);
  }

}
export default Presentation;
