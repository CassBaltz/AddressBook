import React, { Component } from 'react';

import CardLayout from './card-layout';
import ListLayout from './list-layout';

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
      <div>
        {this.renderLayout()}
      </div>
    );
  }
}


export default BodyComponent;
