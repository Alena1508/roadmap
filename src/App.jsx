import React, { Component } from "react";
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContextProvider } from "react-dnd";
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar";
import Roadmap from "./components/Roadmap/Roadmap";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import "./App.css";

library.add(faStroopwafel);

class App extends Component {
  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="App">
          <Header />
          <div className="title">
            <h1>Product Roadmap</h1>
          </div>
          <div className="timeline">
            <Roadmap />
          </div>
          <Sidebar />
        </div>
      </DragDropContextProvider>
    );
  }
}

export default App;
