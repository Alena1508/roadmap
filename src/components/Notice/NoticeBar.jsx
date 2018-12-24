import React, {Component, Fragment} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import "./Notice.css";

class NoticeBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {handleClose} = this.props;
    return (
      <Fragment>
          <div className="notice-wrapper">
            <FontAwesomeIcon icon={faTimes} className="notice-close-icon" onClick={() => handleClose()} />
            <h3>Awesome! Now let's add few bars.</h3>
            <p>Bars are your specific initiative. Use them to represent your epics, projects, or tasks, and provide an at a glance view of priority, relationships and progress.<br/> Drag and drop a bar to get started</p>
            <button className="notice-button" type="button" onClick={() => handleClose()}>Go it</button>
          </div>
      </Fragment>
    );
  }
}

export default NoticeBar;
