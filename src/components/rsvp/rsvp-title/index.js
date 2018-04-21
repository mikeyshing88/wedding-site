import React, { Component } from 'react';

import css from './rsvp-title.scss';

class RsvpTitle extends Component {
  render() {
    return (
      <div className={css.rsvpTitle}>
        <h1 className={css.rsvpTitleHeadingHandwriting}>
          RSVP
        </h1>
        <h2 className={css.rsvpTitleSubHeadingHandwriting}>
          for the wedding of
        </h2>
        <h2 className={css.rsvpTitleName}>
          Michael <span>&</span> Helen
        </h2>
      </div>
    );
  }
}

export default RsvpTitle;
