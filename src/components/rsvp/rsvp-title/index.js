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
        <h1 className={css.rsvpTitleHeadingHandwriting}>
          Invitation
        </h1>
        {/* <h2 className={css.rsvpTitleSubHeadingHandwriting}>
          for the wedding of
        </h2> */}
        {/* <h2 className={css.rsvpTitleName}>
          Michael <span>&</span> Helen
        </h2> */}
      </div>
    );
  }
}

export default RsvpTitle;
