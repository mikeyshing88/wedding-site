import React from 'react';

import { utilFetch } from 'utils/utils';

function RsvpDecorator(ComposedComponent) {
  return class RsvpDecoratorClass extends React.Component {
    /**
     * Get JSON data of current RSVP guests
     * @return {Array} rsvpJson
     */
    async getRsvpData() {
      const NETLIFY_FUNC = 'https://shingsquadwedding.netlify.com/.netlify/functions/fetch-rsvps';
      let rsvpJson = [];

      function fetchData(path) {
        return utilFetch(path).then((res) => {
          return JSON.parse(res);
        }).catch((error) => {
          /* eslint no-console: 0 */
          console.error('error', error);
        });
      }

      await fetchData(NETLIFY_FUNC).then((res) => {
        rsvpJson = res;
      });

      return rsvpJson;
    }

    /**
     * render
     * @return {ReactElement} markup
     */
    render() {
      return (
        <ComposedComponent
          {...this.props}
          getRsvpData={this.getRsvpData}
        />
      );
    }
  };
}

export default RsvpDecorator;
