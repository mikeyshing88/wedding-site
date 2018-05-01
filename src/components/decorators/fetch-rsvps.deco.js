import React from 'react';

import { utilFetch } from 'utils/utils';

function RsvpDecorator(ComposedComponent) {
  return class RsvpDecoratorClass extends React.Component {
    /**
     * Get JSON data
     * @param  {String, string} variant, packageId
     * @return {Object} optionsToRender
     */
    async getRsvpData() {
      const NETLIFY_FUNC = 'https://shingsquadwedding.netlify.com/.netlify/functions/fetch-rsvps';
      let apiUrl = '';
      function fetchData(path) {
        return utilFetch(path).then((res) => {
          console.log(res, 'fldjfl');
          return res.json();
        }).catch((error) => {
          /* eslint no-console: 0 */
          console.error('error', error);
        });
      }

      await fetchData(NETLIFY_FUNC).then((res) => {
        const optionData = res;
        // Filter data to only show the defined visible IDs
        apiUrl = optionData;
        console.log(optionData, 'fkdjlkfjdfkd');
      });

      return apiUrl;
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
