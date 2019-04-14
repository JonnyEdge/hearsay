import React from 'react';
import '../styles/app.scss';
import Nav from '../components/nav';
import Header from '../components/header';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Header />
      </div>
    );
  }
}

export default App;
