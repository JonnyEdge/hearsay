import React from 'react';
import '../styles/header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h2>Talk amongst yourselves</h2>
        <p>Places to drink and hear yourself think in Manchester.</p>
      </div>
    );
  }
}

export default Header;
