import React, {Component, Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import './RoadmapItem.css';

class RoadmapItem extends Component {
  state = {
    isShowItem: true,
  };

  hideRoadmapItem = () => {
    this.setState({
      isShowItem: !this.state.isShowItem
    });
  };

  render() {
    const {isShowItem} = this.state;
    const {number} = this.props;
    return (
      <Fragment>
        {
          isShowItem &&
          <div className="roadmap-item">
            <span className="text">  Roadmap Item {number}</span>
            <FontAwesomeIcon icon={faTimes} className="roadmap-item-icon" onClick={() => this.hideRoadmapItem()}/>
          </div>
        }
      </Fragment>

    );
  }
}

export default RoadmapItem;
