import React, { Component } from 'react';

import RsvpDecorator from '../../components/decorators/fetch-rsvps.deco';
import Page from '../../components/page/page';
import Rsvp from '../../components/rsvp/rsvp';

@RsvpDecorator
class RsvpView extends Component {
  state = {
    currentRsvps: []
  }

  componentWillMount() {
    this.setCurrentRsvps(this.props);
  }

  /**
   * Set current RSVP guests
   * @param  {Object} props
   */
  setCurrentRsvps = (props) => {
    props.getRsvpData()
      .then((result) => {
        this.setState({
          currentRsvps: result
        });
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