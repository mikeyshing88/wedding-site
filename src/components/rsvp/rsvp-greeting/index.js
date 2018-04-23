import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './rsvp-greeting.scss';

class RsvpGreeting extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  };

  render() {
    const { name, desc } = this.props;

    return (
      <div>
        {/* <h3 className={css.rsvpGreetingHello}>
          Dear,
        </h3> */}
        <h3 className={css.rsvpGreetingName}>
          To: {name}
        </h3>
        <h2 className={css.rsvpGreetingDesc}>
          {desc}
        </h2>
        <p className={css.rsvpGreetingSignature}>
          Michael & Helen
        </p>
        <button className={css.rsvpGreetingButton}>
          Click to RSVP
        </button>
      </div>
    );
  }
}

export default RsvpGreeting;
