import React, { Component } from 'react';
class VisuelInfo extends Component {
	constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
      
    return (
            <div>
            	<TitreImage
               	titre = {this.state.content.titre}
               />
            </div>
            <div>
            	<DesciptionImage 
               		desciption = {this.state.content.desciption}
               />
            </div>
            <div>
            	<ImageImage
               		image={this.state.content.image}
               	/>
            </div>
    );
  }
}
export default VisuelInfo;