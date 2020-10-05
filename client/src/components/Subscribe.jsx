import React, { Component } from 'react';

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
            <h2>Name: </h2>
            <input name="fullName" type="text" onChange={this.handleChange} placeholder="Vu Huynh"/>
          </label>
          <label>
            <h2>Email: </h2>
            <input name="email" type="text" onChange={this.handleChange} placeholder="vu.huynh@gmail.com"/>
          </label>
            <button>Submit</button>
        </form>
      </div>
    )
  }

}

export default Subscribe;