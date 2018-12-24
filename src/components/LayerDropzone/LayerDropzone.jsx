import * as React from 'react'
import {
  DropTarget,
} from 'react-dnd'
import { CardTypes } from '../../constants/constants'
import "./LayerDropzone.css";


const boxTarget = {
  drop(props, monitor, component) {
    component.handleDrop(monitor.getItem());
  }
};


class LayerDropzone extends React.Component {
  state = {
    layers: []
  };

  handleDrop = () => {
    this.props.handleDrop();
  };

  render() {
    const { connectDropTarget } = this.props;
    const dropzoneClassname = "layer-dropzone-active";
    return connectDropTarget(
      <div className={dropzoneClassname}>
        <h3 className="text">Drop here</h3>
      </div>
    )
  }
}

export default DropTarget(
  CardTypes.BAR,
  boxTarget,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
  }),
)(LayerDropzone)
