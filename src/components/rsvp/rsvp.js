import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { Form, Button } from 'reactstrap';

import './rsvp.scss';

class Rsvp extends Component {
  static propTypes = {
    guest: PropTypes.string.isRequired
  };

  static defaultProps = {
    guest: ''
  };

  constructor(props) {
    super(props);

    this.state = {
      guest: '',
      guestResponse: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(props) {
    this.setState({
      guest: this.props.guest
    });
  }

  encode = (data) => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  }

  handleChange = (e) => {
    const response = e.target.name;

    this.setState({
      guestResponse: response
    });
  }

  handleSubmit = (e) => {

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'form-name': 'contact',
        ...this.state
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
        <form netlify onSubmit={this.handleSubmit} ondata-netlify="true" data-netlify-honeypot="true">
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="name" value={this.state.guest} />
          <input type="hidden" name="message" value={this.state.guestResponse} />
          <button
            name="Yes"
            type="submit"
            onClick={this.handleChange}
          >
            Accept
          </button>
          <button
            name="No"
            onClick={this.handleChange}
            type="submit"
          >
            Decline
          </button>
        </form>
      </div>
    );
  }
}

export default Rsvp;
