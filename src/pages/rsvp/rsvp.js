import React, { Component } from 'react';

import Page from '../../components/page/page';
import Rsvp from '../../components/rsvp/rsvp';

class RsvpView extends Component {

  componentDidMount() {
    fetch('https://api.netlify.com/api/v1/sites/3ff4b4ce-bfe2-4f82-8e4e-878af64d153e/forms')
      .then((response) => {
        console.log(response);
        response.json();
      })
      .then((res) => {
        // console.log(res.json());
      });
  }

  render() {
    const header = false;

    return (
      <Page
        title="Shing Wedding | RSVP"
        includeHeader={header}
      >
        <Rsvp />
      </Page>
    );
  }
}

export default RsvpView;
