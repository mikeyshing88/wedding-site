import React, { Component } from 'react';

import RsvpForm from './rsvp-form';
import RsvpTitle from './rsvp-title';

import getQueryString from '../../utils/_get-query-string';
import guestsRawData from '../../assets/json/guestData.json';

import css from './rsvp.scss';

class Rsvp extends Component {
  state = {
    guest: ''
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      const param = 'surname';
      const url = window.location.href;
      const guest = getQueryString(param, url);

      this.setState({ guest });
    }
  }

  render() {
    const { guest } = this.state;
    const guestData = guestsRawData[guest];
    const { intro, desc } = guestData;

    return (
      <div className={css.rsvp}>
        <RsvpTitle />
        <h1>{intro}</h1>
        <h2>{desc}</h2>
        <RsvpForm guest={guest} />
      </div>
    );
  }
}

export default Rsvp;
