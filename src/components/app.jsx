import React from 'react';
import '../styles/app.scss';
import Nav from '../components/nav';

class App extends React.Component {
  render() {
    return (
      <div className="nav">
        <Nav />
      </div>
    );
  }
}

export default App;
