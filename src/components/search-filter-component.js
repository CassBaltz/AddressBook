import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ActionField } from '@bronto/components';

import { updateSearchQuery, clearSearchQuery } from '../actions/view-state-actions';

class SearchFilter extends Component {
  constructor(props) {
    super(props)
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(query) {
    if (query.value) {
      this.props.dispatch(updateSearchQuery(query.value))
    } else {
      this.props.dispatch(clearSearchQuery)
    }
  }

  render() {
    return (
      <ActionField
        name="plainTextField"
        width="200"
        onChange={(query) => this.updateSearch(query)}
        placeholder="Search By Name"
        showClear={true}
      />
    );
  }
}


export default connect()(SearchFilter);
