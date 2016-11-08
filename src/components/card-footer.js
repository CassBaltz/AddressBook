import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleBlockedContact, updateCurrentContact } from '../actions/contact-actions';

import { ActionButton, colors } from '@bronto/components';

class CardFooter extends Component {
  constructor(props) {
    super(props)
    this.blockUser = this.blockUser.bind(this);
    this.updateCurrentContact = this.updateCurrentContact.bind(this);
  }

  blockUser(e) {
    e.preventDefault();
    this.props.dispatch(toggleBlockedContact(this.props.contact))
  }

  updateCurrentContact(e) {
    e.preventDefault();
    this.props.dispatch(updateCurrentContact(this.props.contact))
  }

  render() {
    const blockText = this.props.contact.blocked ? "Unblock" : "Block";

    return (
      <div style={styles.footerBar}>
        <ActionButton
          label={blockText}
          style={styles.blockButton}
          onClick={this.blockUser}
        />
        <ActionButton
          label="Edit"
          style={styles.editButton}
          onClick={this.updateCurrentContact}
        />
      </div>
    );
  }
}

const styles = {
  footerBar: {
    background: `${colors.dgrey50}`,
    font: `${colors.dgrey50}`,
    borderRadius: '3px',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  blockButton: {
    background: `${colors.red50}`
  },
  editButton: {
    background: `${colors.green50}`
  }
}

export default connect()(CardFooter);
