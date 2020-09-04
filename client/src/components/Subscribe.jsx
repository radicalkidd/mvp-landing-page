import React, { Component } from 'react';

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    alert("You have subscribed to our email listing!");
    e.preventDefault();
  }

  render() {
    return (
      <div className="subscribe-container" id="subscribe">
        <h1>Subscribe for Updates</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
            <button>Submit</button>
        </form>
      </div>
    )
  }

}

export default Subscribe;