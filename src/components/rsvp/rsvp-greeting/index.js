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
        <h3 className={css.rsvpGreetingHello}>
          Dear,
        </h3>
        <h3 className={css.rsvpGreetingName}>
          {name}
        </h3>
        <h2 className={css.rsvpGreetingDesc}>
          {desc}
        </h2>
        <button className={css.rsvpGreetingButton}>
          RSVP
        </button>
      </div>
    );
  }
}

export default RsvpGreeting;
