import React, {Component} from 'react';
import LayerDropzone from '../LayerDropzone/LayerDropzone';
import { blocks, blockWidth, firstBlockWidth } from '../../constants/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './LayerContainer.css';
import RoadmapItem from '../RoadmapItem/RoadmapItem';

class LayerContainer extends Component {
  state = {
    isFirstRowAvailable: true,
    isSecondRowAvailable: false,
    firstRow: [],
    secondRow: [],
    isZoneShown: true
  };

  handleDrop = () => {
    if (this.state.isFirstRowAvailable) {
      this.setState({ firstRow: [...this.state.firstRow, "bar"] });
    } else {
      this.setState({ secondRow: [...this.state.secondRow, "bar"] });
    }
    this.setState({ isFirstRowAvailable: !this.state.isFirstRowAvailable, isSecondRowAvailable: !this.state.isSecondRowAvailable });
  };

  handleShow = () => {
    this.setState({ isZoneShown: !this.state.isZoneShown})
  };

  render() {
    const { firstRow, secondRow, isFirstRowAvailable, isSecondRowAvailable, isZoneShown } = this.state;

    return (
      <div className="layer-container">
        <div className="layer-container-header">
          <FontAwesomeIcon icon={faCaretDown} className="layer-icon" onClick={() => this.handleShow()}/>&nbsp;
          Lane
        </div>
        {
          isZoneShown &&
          <div className="layer-container-dropzone">
            <div className="layer-container-background-dropzone">
              <div style={{ width: `${firstBlockWidth}%` }} className="background-block" />
              {
                blocks.map((item, index) => {
                  return <div key={index} style={{ width: `${blockWidth}%` }} className="background-block"></div>
                })
              }
            </div>

            <div className="layer-container-firstrow">
              {
                firstRow.map((item, index) => {
                  return <RoadmapItem number={2 * index + 1} key={index} />
                })
              }
              {
                isFirstRowAvailable
                  ? (
                    <LayerDropzone handleDrop={this.handleDrop} />
                  )
                  :
                  null
              }

            </div>

            <div className="layer-container-secondrow">
              {
                secondRow.map((item, index) => {
                  return <RoadmapItem number={2 * (index + 1)} key={index} />
                })
              }
              {
                isSecondRowAvailable
                  ? (
                    <LayerDropzone handleDrop={this.handleDrop} />
                  )
                  :
                  null
              }

            </div>

          </div>
        }
      </div>
    );
  }
}

export default LayerContainer;
