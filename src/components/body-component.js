import React, { Component } from 'react';

import CardLayout from './card-layout';
import ListLayout from './list-layout';
import ContactForm from './contact-form';

import { colors } from '@bronto/components';

class BodyComponent extends Component {
  constructor(props) {
    super(props)
    this.renderLayout = this.renderLayout.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  renderLayout() {
    const contacts = this.props.contacts;

    if (this.props.viewState.cardView) {
      return <CardLayout contacts={contacts}/>
    } else {
      return <ListLayout contacts={contacts}/>
    }
  }

  renderForm() {
    const currentContact = this.props.currentContact;

    if (currentContact) {
      return (<ContactForm currentContact={currentContact} />);
    }
  }

  render() {
    return (
      <div style={styles}>
        {this.renderForm()}
        {this.renderLayout()}
      </div>
    );
  }
}

const styles = {
  background: `${colors.green50}`,
  minHeight: '85vh',
  overflow: 'hidden'
}

export default BodyComponent;
