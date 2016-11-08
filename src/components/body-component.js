import React, { Component } from 'react';

import CardLayout from './card-layout';
import ListLayout from './list-layout';

import { colors } from '@bronto/components';

class BodyComponent extends Component {
  constructor(props) {
    super(props)
    this.renderLayout = this.renderLayout.bind(this);
  }

  renderLayout() {
    const contacts = this.props.contacts;

    if (this.props.viewState.cardView) {
      return <CardLayout contacts={contacts}/>
    } else {
      return <ListLayout contacts={contacts}/>
    }
  }

  render() {
    return (
      <div style={styles}>
        {this.renderLayout()}
      </div>
    );
  }
}

const styles = {
  background: `${colors.green50}`,
  minHeight: '85vh'
}

export default BodyComponent;
