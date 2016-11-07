import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleBlockedContacts } from '../actions/view-state-actions';

class BlockFilter extends Component {
  constructor(props) {
    super(props)
    this.toggleBlocked = this.toggleBlocked.bind(this);
  }

  toggleBlocked(e) {
    this.props.dispatch(toggleBlockedContacts)
  }

  render() {
    let text = this.props.viewState.hideBlocked ? "Show Blocked" : "Hide Blocked";
    return (
      <button onClick={this.toggleBlocked}>{text}</button>
    );
  }
}



export default connect()(BlockFilter);
