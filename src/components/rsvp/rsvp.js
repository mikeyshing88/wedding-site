import React, { Component } from 'react';
import cx from 'classnames';
import Sensor from 'react-visibility-sensor';

import RsvpForm from './rsvp-form';
import RsvpTitle from './rsvp-title';
import RsvpGreeting from './rsvp-greeting';
import RsvpHero from './rsvp-hero';


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

    console.log(name, desc);
    return (
      <div className={css.rsvp}>
        {/* <div className={`${css.rsvpFrame} ${css.rsvpFrameOne}`} /> */}
        {/* <div className={`${css.rsvpFrame} ${css.rsvpFrameTwo}`} /> */}
        {/* <img
          src="/assets/img/rsvp/flower-top-right.png"
          className={css.rsvpTopBorder}
          alt=""
        /> */}
        {/* <img
          src="/assets/img/rsvp/flower-top-right.png"
          className={css.rsvpBottomBorder}
          alt=""
        /> */}
        <div className={css.rsvpHero}>
          <RsvpHero />
        </div>
        <div className={css.rsvpContent}>
          <Sensor partialVisibility>
            {({ isVisible }) => (
              <div
                className={cx(
                  css.rsvpFade,
                  isVisible ? css.rsvpFadeActive : ''
                )}
              >
                <RsvpTitle />
                <RsvpGreeting
                  name={name}
                  desc={desc}
                />
                <RsvpForm guest={guest} />
              </div>
            )}
          </Sensor>
        </div>
      </div>
    );
  }
}

export default Rsvp;
