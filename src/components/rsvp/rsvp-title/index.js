import React, { Component } from 'react';

import css from './rsvp-title.scss';

class RsvpTitle extends Component {
  render() {
    return (
      <div className={css.rsvpTitle}>
        <h1 className={css.rsvpTitleHeading}>
          RSVP <br />
          <span className={css.rsvpTitleHeadingHandwriting}>
            for the wedding of <br />
          </span>
          Michael & Helen
        </h1>
      </div>
    );
  }
}

export default RsvpTitle;
