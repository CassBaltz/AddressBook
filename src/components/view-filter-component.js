import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleLayoutView } from '../actions/view-state-actions';

class ViewFilter extends Component {
  constructor(props) {
    super(props)
    this.toggleLayout = this.toggleLayout.bind(this);
  }

  toggleLayout(e) {
    this.props.dispatch(toggleLayoutView)
  }

  render() {
    let text = this.props.viewState.cardView ? "Show List View" : "Show Card View";
    return (
      <button onClick={this.toggleLayout}>{text}</button>
    );
  }
}



export default connect()(ViewFilter);
