import React, { Component } from 'react';
// import { Form, Button } from 'reactstrap';

import './rsvp.scss';

class Rsvp extends Component {
  static defaultProps = {
    guest: ''
  };

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  encode = (data) => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  }

  handleSubmit = (e) => {
    const response = e.target.name;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'form-name': 'contact',
        response
      })
    })
      .then(() => console.log('Success!'))
      .catch(error => console.log(error));

    e.preventDefault();
  };

  render() {
    console.log('flkelkfjdkfjdklj');
    return (
      <div>
        <form netlify onSubmit={this.handleSubmit} name="yes" data-netlify="true" data-netlify-honeypot="true">
          <input type="hidden" name="form-name" value="contact" />
          <button
            name="Yes"
            type="submit"
          >
            Accept
          </button>
          {/* <button
            name="No"
            onClick={this.handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="true"
          >
            Decline
          </button> */}
        </form>
      </div>
    );
  }
}

export default Rsvp;
