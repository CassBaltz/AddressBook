import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ActionButton, colors } from '@bronto/components';

import { updateCurrentContact } from '../actions/contact-actions';

class NewContactButton extends Component {
  constructor(props) {
    super(props)
    this.openAction = this.openAction.bind(this);
  }

  openAction(e) {
    e.preventDefault();
    const contact = {
      firstName: "",
      lastName: "",
      email: "",
      imageUrl: "",
      gender: null,
      blocked: false,
      birthday: ""
    };
    this.props.dispatch(updateCurrentContact(contact));
  }

  render() {
    return (
      <ActionButton
        onClick={this.openAction}
        label="ADD CONTACT"
        raised={true}
        disabled={this.props.currentContact ? true : false}
        style={{background: colors.green400, color: colors.grey50}}
      />
    );
  }
}

export default connect()(NewContactButton);
