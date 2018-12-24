import React, { Component } from 'react';
import LogoIcon from '../../icons/LogoIcon.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';


class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <LogoIcon />
        </div>
        <div className="search">
          <span>Candidate Roadmap</span>
          <div className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
