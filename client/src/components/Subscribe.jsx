import React, { Component } from 'react';

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <div className="subscribe-container">
        <h1>Subscribe for Updates</h1>
        <form>
          <label>
            Email:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          {/* <input>Submit</input> */}
        </form>
      </div>
    )
  }

}

export default Subscribe;