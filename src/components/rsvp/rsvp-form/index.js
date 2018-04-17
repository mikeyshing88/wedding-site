import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './rsvp-form.scss';

class RsvpForm extends Component {
  static propTypes = {
    guest: PropTypes.string.isRequired
  };

  static defaultProps = {
    guest: ''
  };

  constructor(props) {
    super(props);

    this.state = {
      name: 'tt',
      message: 'test'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(props) {
    this.setState({
      name: this.props.guest
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
      message: response
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
    console.log(this.state);
    console.log('fkjfdkjfk');
    return (
      <div>
        <form
          name="contact"
          onSubmit={this.handleSubmit}
          data-netlify-honeypot="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="name" value={this.state.name} />
          <input type="hidden" name="message" value={this.state.message} />
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

export default RsvpForm;
