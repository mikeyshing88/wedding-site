import React, { Component } from 'react';

import Page from '../../components/page/page';
import Rsvp from '../../components/rsvp/rsvp';

class RsvpView extends Component {
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
