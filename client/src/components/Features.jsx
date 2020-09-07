import React, { Component } from 'react';
import { features } from 'process';

class Features extends Component {
  render () {
    return (
      <div id="features">
      <h1 className="features-title">Features</h1>
      <div className="features-container">
          <div className="f1 box-1">
            <div>
            <h4>Support</h4>
            <p>24/7 Support</p>
            </div>
          </div>
          <div className="f2 box-2">2</div>
          <div className="f3 box-3">3</div>
      </div>

      </div>
    )
  }

}

export default Features;
