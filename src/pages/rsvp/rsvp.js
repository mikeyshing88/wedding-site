import React, { Component } from 'react';

import Page from '../../components/page/page';
import Rsvp from '../../components/rsvp/rsvp';

class RsvpView extends Component {
  componentDidMount() {
    const NETLIFY_FUNC = 'shingsquadwedding.netlify.com/.netlify/functions/fetch-rsvps';
    fetch(`https://${NETLIFY_FUNC}`)
      .then((res) => {
        console.log(res, 'fkldjlkfdjlkf');
        this.setState({ subs: res });
      });
  }

  render() {
    const header = false;
    console.log(this.state);

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
