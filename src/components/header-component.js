import React, { Component } from 'react';

import { colors } from '@bronto/components';

import BlockFilter from './block-filter-component';
import SearchFilter from './search-filter-component';
import ViewFilter from './view-filter-component';
import NewContactButton from './new-contact-button'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.root}>
        <SearchFilter viewState={this.props.viewState} />
        <div style={styles.filterContainer}>
          <BlockFilter viewState={this.props.viewState}/>
          <ViewFilter viewState={this.props.viewState}/>
        </div>
        <NewContactButton
          viewState={this.props.viewState}
          currentContact={this.props.currentContact}/>
      </div>
    );
  }
}

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    background: `${colors.dgrey400}`,
    padding: '10px',
    alignItems: 'center'
  },
  filterContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}

export default Header;
