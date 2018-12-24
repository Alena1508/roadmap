import React, {Component, Fragment} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import "./Notice.css";

class NoticeLine extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {handleClose} = this.props;
    return (
      <Fragment>
          <div className="notice-wrapper">
            <FontAwesomeIcon icon={faTimes} className="notice-close-icon" onClick={() => handleClose()} />
            <h3>We'll start with a lane</h3>
            <p>Lanes represent high level categories, such as teams, product lines, or strategic initiatives. Add a color and description to your lane to communicate valuable details to stakeholders.<br/> Drag and drop a lane to get started</p>
            <button className="notice-button" type="button" onClick={() => handleClose()}>Go it</button>
          </div>
      </Fragment>
    );
  }
}

export default NoticeLine;
