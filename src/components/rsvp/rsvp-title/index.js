import React, { Component } from 'react';

import css from './rsvp-title.scss';

class RsvpTitle extends Component {
  render() {
    return (
      <div className={css.rsvpTitle}>
        <img
          src="/assets/img/rsvp/bouquet.png"
          className={css.rsvpTitleBouquet}
          alt="Bouquet"
        />
        <h1 className={css.rsvpTitleHeading}>
          Invitation
        </h1>
      </div>
    );
  }
}

export default RsvpTitle;
