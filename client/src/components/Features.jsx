import React, { Component } from 'react';

class Features extends Component {
  render () {
    return (
      <div id="features">
      <h1 className="features-title">Features</h1>
      <div className="features-container">
          <div className="f1 box-1">
            <div>
            <h4>Support</h4>
            <p>24/7 Support from our experienced staff</p>
            </div>
          </div>
          <div className="f2 box-2">
          <div>
            <h4>Monitors</h4>
            <p>Monitoring over 200+ Shopify sites and Footsites</p>
            </div>
          </div>
          <div className="f3 box-3">
          <div>
            <h4>Free ACO Slots</h4>
            <p>For our premium members, we provide free ACO slots!</p>
            </div>
          </div>
      </div>

      </div>
    )
  }

}

export default Features;
