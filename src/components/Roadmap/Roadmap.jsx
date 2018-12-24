import * as React from 'react';
import {
  DropTarget,
} from 'react-dnd';
import LayerContainer from "../LayerContainer/LayerContainer";
import {blocks, CardTypes, firstBlockWidth, blockWidth} from '../../constants/constants';
import NoticeLine from '../Notice/NoticeLine';
import NoticeBar from '../Notice/NoticeBar';
import {times} from '../../constants/constants';
import moment from 'moment';
import "./Roadmap.css";


const boxTarget = {
  drop(props, monitor, component) {
    component.handleDrop(monitor.getItem());
  }
}

const START_DATE = "2018-12-01";
const END_DATE = "2020-01-01";


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

  getMonthArray = (start, end) => {
    let startDate = moment(START_DATE, "YYYY-M-DD");
    const endDate = moment(END_DATE, "YYYY-M-DD").endOf("month");
    const allMonthsInPeriod = [];
    while (startDate.isBefore(endDate)) {
      allMonthsInPeriod.push({
        date: startDate.format("YYYY-MM-DD"),
        year: startDate.format("YYYY"),
        month: startDate.format("MM"),
      });
      startDate = startDate.add(1, "month");
    }
    return allMonthsInPeriod;
  };

  render() {
    const {canDrop, connectDropTarget} = this.props;
    const {layers, showNoticeBar, showNoticeLine} = this.state;
    const month = this.getMonthArray(START_DATE, END_DATE);
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
              {
                month.map(({date, year, month}, index) => {
                  return <div
                    key={date}
                    className={["timeline-block", (month-1) % 4 === 0 ? 'quater' : null ]}
                  >.{date}</div>
                })
              }
            </div>
            {
              layers.map((item, index) => {
                return <LayerContainer month={month} key={index}/>
              })
            }
        </div>
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
