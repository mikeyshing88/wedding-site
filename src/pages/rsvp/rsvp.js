import React, { Component } from 'react';
// import NetlifyAuth from 'netlify-auth-providers';

import Page from '../../components/page/page';
import Rsvp from '../../components/rsvp/rsvp';

class RsvpView extends Component {
  // componentWillMount() {
  //   const cfg = {
  //     base_url: 'test',
  //     site_id: (document.location.host.split(':')[0] === 'localhost') ? 'cms.netlify.com' : '1111'
  //   };

  //   const authenticator = new NetlifyAuth(cfg);
  //   authenticator.authenticate({ provider: 'github', scope: 'user' }, (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log(data, 'fkdjfkdj');
  //   });
  // }

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
