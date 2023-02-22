import React, { Component } from 'react';
import '../css/header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Solar System</h1>
        <div className="elipse" />
      </header>
    );
  }
}

export default Header;
