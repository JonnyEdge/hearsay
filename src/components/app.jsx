import React from 'react';
import '../styles/app.scss';
import Nav from '../components/nav';
import Header from '../components/header';
import Find from '../components/find';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Header />
        <Find />
      </div>
    );
  }
}

export default App;
