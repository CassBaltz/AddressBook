import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ActionButton } from '@bronto/components';

import { toggleLayoutView } from '../actions/view-state-actions';

class ViewFilter extends Component {
  constructor(props) {
    super(props)
    this.toggleLayout = this.toggleLayout.bind(this);
  }

  toggleLayout(e) {
    e.preventDefault()
    this.props.dispatch(toggleLayoutView)
  }

  render() {
    let text = this.props.viewState.cardView ? "Show List View" : "Show Card View";
    return (
      <ActionButton
        onClick={this.toggleLayout}
        label={text}
        raised={true}
      />
    );
  }
}



export default connect()(ViewFilter);
