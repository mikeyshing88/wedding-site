import React, { Component } from 'react';

// import RsvpForm from './rsvp-form';
import RsvpTitle from './rsvp-title';
import RsvpGreeting from './rsvp-greeting';

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
      const bodyClass = window.location.pathname.indexOf('/rsvp') > -1
        ? 'rsvp-page'
        : '';

      document.body.classList.add(bodyClass);

      this.setState({ guest });
    }
  }

  render() {
    const { guest } = this.state;
    const guestData = guestsRawData[guest];
    const { name, desc } = guestData;

    return (
      <div className={css.rsvp}>
        <div className={`${css.rsvpFrame} ${css.rsvpFrameOne}`} />
        <div className={`${css.rsvpFrame} ${css.rsvpFrameTwo}`} />
        <div className={css.rsvpContent}>
          <RsvpTitle />
          <RsvpGreeting
            name={name}
            desc={desc}
          />
          {/* <RsvpForm guest={guest} /> */}
        </div>
      </div>
    );
  }
}

export default Rsvp;
