import React, { Component } from 'react';

import RsvpDecorator from '../../components/decorators/fetch-rsvps.deco';
import Page from '../../components/page/page';
import Rsvp from '../../components/rsvp/rsvp';

@RsvpDecorator
class RsvpView extends Component {
  componentWillMount() {
    this.setPackageData(this.props);
  }

  /**
   * Set current page option data into the state
   * @param  {Object} props
   */
  setPackageData = (props) => {
    props.getRsvpData()
      .then((result) => {
        this.setState({
          sub: result
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
