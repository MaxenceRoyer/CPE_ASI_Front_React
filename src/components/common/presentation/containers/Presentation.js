import React, { Component } from 'react';
import './presentation.css';
import Slid from '../../slid/containers/Slid';


class Presentation extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

 /* onChangeTitle(event) {
    this.setState({slideTitle: event.target.value}).bind(this)
  }

  onChangeDescription(event) {
    this.setState({slidDescription: event.target.value}).bind(this)
  }*/

  render() {
    
    /*var onChangeTitle = this.onChangeTitle;
    var onChangeDescription = this.onChangeDescription;*/
    return (<div>
      <Slid 
        content = {this.props.content}
        displayMode="FULL_MNG"
      />
      

    </div>);
  }

}
export default Presentation;
