import React from 'react';
import { DragSource } from 'react-dnd';
import "./Card.css";

const cardSource = {
  beginDrag(props) {
    return {
      text: props.text
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Card extends React.Component {
  render() {
    const { isDragging, connectDragSource, text } = this.props;

    return connectDragSource(
      <div style={{ opacity: isDragging ? 0.5 : 1 }} className="card">
        {text}
      </div>
    );
  }
}

export default DragSource((props) => {return props.type}, cardSource, collect)(Card);
