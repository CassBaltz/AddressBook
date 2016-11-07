import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateSearchQuery, clearSearchQuery } from '../actions/view-state-actions';

class SearchFilter extends Component {
  constructor(props) {
    super(props)
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(e) {
    e.preventDefault()
    if (e.target.value) {
      this.props.dispatch(updateSearchQuery(e.target.value))
    } else {
      this.props.dispatch(clearSearchQuery)
    }
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search By Name"
        onChange={this.updateSearch}
      />
    );
  }
}


export default connect()(SearchFilter);
