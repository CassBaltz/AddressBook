import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ActionButton } from '@bronto/components';

import { toggleBlockedContacts } from '../actions/view-state-actions';

class BlockFilter extends Component {
  constructor(props) {
    super(props)
    this.toggleBlocked = this.toggleBlocked.bind(this);
  }

  toggleBlocked(e) {
    e.preventDefault();
    this.props.dispatch(toggleBlockedContacts);
  }

  render() {
    let text = this.props.viewState.hideBlocked ? "Show All" : "Hide Blocked";
    return (
      <ActionButton
        onClick={this.toggleBlocked}
        label={text}
        style={{marginRight: '10px'}}
      />
    );
  }
}

export default connect()(BlockFilter);
