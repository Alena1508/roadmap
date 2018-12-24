import React, {Component} from "react";
import Card from "../Card/Card";
import {CardTypes} from '../../constants/constants';
import "./Sidebar.css";

class Sidebar extends Component {


  render() {

    return (
      <aside className="sidebar">
        <Card text='Add Lane' type={CardTypes.LANE}/>
        <Card text='Add Bar' type={CardTypes.BAR}/>
      </aside>
    );
  }
}

export default Sidebar;
