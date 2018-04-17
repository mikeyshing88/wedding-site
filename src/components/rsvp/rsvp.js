import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Form, Button } from 'reactstrap';

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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // async handleSubmit(e) {
  //   e.preventDefault();

  //   const response = e.target.name;
  //   const { guest } = this.props;

  //   /* eslint-disable */
  //   const rsvp = await axios.post('/api/rsvp', {
  //     guest,
  //     response
  //   });
  // }

  encode = (data) => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  }

  handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => console.log('Success!'))
      .catch(error => console.log(error));

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Form>
          <Button
            name="Yes"
            onClick={this.handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="true"
          >
            Accept
          </Button>
          <Button
            name="No"
            onClick={this.handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="true"
          >
            Decline
          </Button>
        </Form>
      </div>
    );
  }
}

export default Rsvp;
