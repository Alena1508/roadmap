import * as React from 'react';
import {
  DropTarget,
} from 'react-dnd';
import LayerContainer from "../LayerContainer/LayerContainer";
import {blocks, CardTypes, firstBlockWidth, blockWidth} from '../../constants/constants';
import NoticeLine from '../Notice/NoticeLine';
import NoticeBar from '../Notice/NoticeBar';
import {times} from '../../constants/constants';
import "./Roadmap.css";


const boxTarget = {
  drop(props, monitor, component) {
    component.handleDrop(monitor.getItem());
  }
}


class Roadmap extends React.Component {

  state = {
    layers: [],
    value: 0,
    previous: 0,
    isNoticeLineShown: false,
    showNoticeLine: false,
    isNoticeBarShown: false,
    showNoticeBar: false,
  };

  toggleNoticeBar = () => {
    this.setState({
      showNoticeBar: !this.state.showNoticeBar,
      isNoticeBarShown: true,
    });
  };

  toggleNoticeLine = () => {
    this.setState({
      showNoticeLine: !this.state.showNoticeLine,
      isNoticeLineShown: true,
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.toggleNoticeLine();
    }, 2000);
  }

  handleDrop = (orderItem) => {
    const {isNoticeBarShown} = this.state;

    this.setState({layers: [...this.state.layers, "layer"]});
    !isNoticeBarShown && this.toggleNoticeBar();
  };

  render() {
    const {canDrop, connectDropTarget} = this.props;
    const {layers, showNoticeBar, showNoticeLine} = this.state;
    const dropzoneClassname = canDrop ? "dropzone-active" : "dropzone";
    return connectDropTarget(
      <div className="roadmap">
        {
          showNoticeBar && layers.length === 1 &&
          <NoticeBar handleClose={this.toggleNoticeBar}/>
        }
        {
          showNoticeLine &&
          <NoticeLine handleClose={this.toggleNoticeLine}/>
        }
        <ul className="roadmap-header">
          <li className="roadmap-header-item active">Roadmap</li>
          <li className="roadmap-header-item">Planning board</li>
          <li className="roadmap-header-item">Parking lot</li>
        </ul>
        {/*<ul className="years-line">*/}
          {/*{*/}
            {/*times.map((i, index) => (*/}
              {/*<li*/}
                {/*className="years-line-item"*/}
                {/*key={index}*/}
                {/*>*/}
                {/*<div className="years-line-name">{i.year}</div>*/}
                {/*<ul*/}
                  {/*className="quarter-line"*/}
                {/*>*/}
                  {/*{*/}
                    {/*i.quarters.map((j, index) => (*/}
                      {/*<li*/}
                        {/*className="years-line-item"*/}
                        {/*key={index}*/}
                        {/*// style={{ width: `${blockWidth}%` }}*/}
                      {/*>*/}
                        {/*<div>{j.name}</div>*/}
                        {/*<ul className="month-line">*/}
                          {/*{*/}
                            {/*j.months.map((k, index) => (*/}
                                {/*<li*/}
                                  {/*className="month-line-item"*/}
                                  {/*key={index}*/}
                                {/*>.</li>*/}
                              {/*))*/}
                          {/*}*/}
                        {/*</ul>*/}
                      {/*</li>*/}
                    {/*))*/}
                  {/*}*/}
                {/*</ul>*/}
              {/*</li>*/}
            {/*))*/}
          {/*}*/}
        {/*</ul>*/}
        <div className="timeline-container">
          <div className="timeline-blocks-wrapper">
            <div style={{ width: `${firstBlockWidth}%` }} className="timeline-block" />
            {
              blocks.map((item, index) => {
                return <div key={index} style={{ width: `${blockWidth}%` }} className="timeline-block">.</div>
              })
            }
          </div>
        </div>
        {
          layers.map((item, index) => {
            return <LayerContainer key={index}/>
          })
        }
        <div className={dropzoneClassname}>
          <h3 className="text">Drop here</h3>
        </div>
      </div>
    )
  }
}

export default DropTarget(
  CardTypes.LANE,
  boxTarget,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
  }),
)(Roadmap)
