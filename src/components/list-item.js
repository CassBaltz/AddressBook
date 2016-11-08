import React, { Component } from 'react';
import { connect } from 'react-redux';

import { colors, ActionButton } from '@bronto/components';
import { toggleBlockedContact, updateCurrentContact } from '../actions/contact-actions';

class ListItem extends Component {
  constructor(props) {
    super(props)
    this.readableDate = this.readableDate.bind(this);
    this.clickableEmail = this.clickableEmail.bind(this);
    this.blockUser = this.blockUser.bind(this);
    this.updateCurrentContact = this.updateCurrentContact.bind(this);
  }

  readableDate(date) {
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    if (date instanceof Date) {
      const day = date.getDate();
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();
      return `${month} ${day}, ${year}`;
    } else {
      return 'unknown'
    }
  }

  blockUser(e) {
    e.preventDefault();
    this.props.dispatch(toggleBlockedContact(this.props.contactDetail));
  }

  updateCurrentContact(e) {
    e.preventDefault();
    this.props.dispatch(updateCurrentContact(this.props.contactDetail));
  }

  clickableEmail(email) {
    return `mailto:${email}`;
  }

  getButtonText(contact) {
    const text = contact.blocked ? "UNBLOCK" : "BLOCK";
    return text;
  }

  render() {
    const contact = this.props.contactDetail;
    return (
      <tr>
        <td>
          {`${contact.firstName} ${contact.lastName}` }
        </td>
        <td>
          <a style={styles.email}
            href={this.clickableEmail(contact.email)}>{contact.email}
          </a>
        </td>
        <td>
          {this.readableDate(contact.birthday)}
        </td>
        <td>
          {contact.gender}
        </td>
        <td style={{textAlign: 'center'}}>
          <ActionButton
            label={this.getButtonText(contact)}
            style={styles.blockButton}
            onClick={this.blockUser}
          />
        </td>
        <td style={{textAlign: 'center'}}>
          <ActionButton
            label='Edit'
            style={styles.editButton}
            onClick={this.updateCurrentContact}
          />
        </td>
      </tr>
    );
  }
}

const styles = {
  email: {
    textDecoration: 'none',
    color: `${colors.green300}`
  },
  blockButton: {
    background: `${colors.red50}`,
    textAlign: 'center'
  },
  editButton: {
    background: `${colors.green50}`
  }
}


export default connect()(ListItem);
