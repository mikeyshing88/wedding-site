import React, { Component } from 'react';

import css from './rsvp-title.scss';

class RsvpTitle extends Component {
  render() {
    return (
      <div className={css.rsvpTitle}>
        <h1 className={css.rsvpTitleRsvpHandwriting}>
          RSVP
        </h1>
        <h2>for the wedding</h2>
        <h2>Michael & Helen</h2>
      </div>
    );
  }
}

export default RsvpTitle;
