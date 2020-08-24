import React, { Component } from 'react';
import Head from './Head.jsx';
import Intro from './Intro.jsx';
import Features from './Features.jsx';
import Subscribe from './Subscribe.jsx';
import Footer from './Footer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="app-container">
        <Head />
        <Intro />
        <Features />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default App;