import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
// import PropTypes from 'prop-types';

import css from './rsvp-hero.scss';

class RsvpHero extends Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   desc: PropTypes.string.isRequired
  // };

  render() {
    // const { name, desc } = this.props;

    return (
      <div className={css.rsvpHero}>
        <div>
          <h1 className={css.rsvpHeroName}>
            Michael & Helen
          </h1>
          <h2 className={`col-xs-8 ${css.rsvpHeroGreeting}`}>
            {`We hope that you can join us on our special day
          to celebrate our wedding`}
          </h2>
        </div>
        <Ionicon
          icon="ios-arrow-round-down"
          fontSize="60px"
          color="#666"
        />
      </div>
    );
  }
}

export default RsvpHero;
