import React from 'react';
import '../styles/nav.scss';
// import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <h1>👂 👄</h1>
        <ul className="links">
          <a className="link" href="/">Find</a>
          <a className="link" href="/">About</a>
          <a className="link" href="/">Contact</a>
          {/* <Link className="item" to="/">Find</Link>
          <Link className="item" to="/">About</Link>
          <Link className="item" to="/">Contact</Link> */}
        </ul>
      </div>
    );
  }
}

export default Nav;
