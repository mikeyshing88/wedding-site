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
    const { intro, desc } = guestData;

    return (
      <div className={css.rsvp}>
        {/* <div className={css.rsvpCurlyBrace}>
          <div className={`${css.rsvpBrace} ${css.rsvpBraceLeft}`} />
          <div className={`${css.rsvpBrace} ${css.rsvpBraceRight}`} />
        </div> */}
        <img
          src="/assets/img/rsvp/floral-top.png"
          className={`${css.rsvpFloral} ${css.rsvpFloralTop}`}
          alt="flower"
        />
        <div className={css.rsvpContent}>
          <RsvpTitle />
          <h1>{intro}</h1>
          <h2>{desc}</h2>
          <RsvpForm guest={guest} />
        </div>
        <img
          src="/assets/img/rsvp/floral-bottom.png"
          className={`${css.rsvpFloral} ${css.rsvpFloralBottom}`}
          alt="flower"
        />
      </div>
    );
  }
}

export default Rsvp;
