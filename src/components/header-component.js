import React, { Component } from 'react';

import BlockFilter from './block-filter-component';
import SearchFilter from './search-filter-component';
import ViewFilter from './view-filter-component';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Header-container">
        <SearchFilter viewState={this.props.viewState} />
        <BlockFilter viewState={this.props.viewState}/>
        <ViewFilter viewState={this.props.viewState}/>
      </div>
    );
  }
}

export default Header;
