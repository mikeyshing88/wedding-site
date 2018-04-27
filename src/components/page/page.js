import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';

import Header from 'components/header/header';

export default class Page extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array
    ]).isRequired,
    header: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.bool
    ]),
    before: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element,
      PropTypes.object
    ]),
    after: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element,
      PropTypes.object
    ]),
    includeHeader: PropTypes.bool.isRequired
  };

  static defaultProps = {
    title: 'Shing Wedding',
    header: () => (<Header />),
    before: null,
    after: null,
    includeHeader: true
  };

  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object
  };

  /**
   * Only update if props and/or state have changed
   * @param  {Object} nextProps
   * @param  {Object} nextState
   * @return {Boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (isEqual(nextProps, this.props) && isEqual(nextState, this.state)) {
      return false;
    }

    return true;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{this.props.title}</title>
        </Helmet>
        {this.props.header && this.props.includeHeader &&
          this.props.header.call(this, Header)
        }

        {this.props.before &&
          this.props.before
        }

        {this.props.after &&
          this.props.after
        }

        {this.props.children &&
          this.props.children
        }
      </div>
    );
  }
}
