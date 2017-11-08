import React, { Component } from 'react';

class EditMetaPres extends Component {
	constructor(props) {
    super(props);
    this.state = {

    };
  }

  render()
  {
    return(
      <div className="form-group row">
      <label htmlFor="title-input" className="col-2 col-form-label">Title</label>
        <div className="col-12">
          <input className="form-control" type="text" value="" id="title-input" />
        </div>
        <label htmlFor="description-input" className="col-2 col-form-label">Description</label>
        <div className="col-12">
          <input className="form-control" type="text" value="" id="description-input" />
        </div>
      </div>
    );
  }
}
export default EditMetaPres;