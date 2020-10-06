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
        <form className="form-container" onSubmit={this.handleSubmit}>
          <label>
            <input className="name-input" name="fullName" type="text" onChange={this.handleChange} placeholder="Full Name"/>
          </label>
          <label>
            <input className="email-input" name="email" type="text" onChange={this.handleChange} placeholder="Email"/>
          </label>
            <button className="s-button">Submit</button>
        </form>
      </div>
    )
  }

}

export default Subscribe;