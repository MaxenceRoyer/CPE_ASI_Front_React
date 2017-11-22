import React, { Component } from 'react';
import './browsePresentationPanel.css';
import Presentation from '../../common/presentation/containers/Presentation';

class BrowsePresentationPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Presentation />
      </div>
    );
  }

}
export default BrowsePresentationPanel;
