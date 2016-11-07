import React, { Component } from 'react';

import { Card } from '@bronto/components';
import { colors } from '@bronto/components';

import CardFooter from './card-footer';

class CardItem extends Component {
  constructor(props) {
    super(props)
    this.setDisplayName = this.setDisplayName.bind(this);
    this.readableDate = this.readableDate.bind(this);
    this.clickableEmail = this.clickableEmail.bind(this);
  }

  setDisplayName(contact) {
    return `${contact.firstName} ${contact.lastName}`;
  }

  readableDate(date) {
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  clickableEmail(email) {
    return `mailto:${email}`;
  }

  render() {
    const contact = this.props.contactDetail;
    return (
      <Card
            headerText={this.setDisplayName(contact)}
            style={styles.root}>
        <div
          className="detail-container"
          style={styles.detailContainer}
        >
          <img
            src={contact.imageUrl}
            alt="Profile Picture"
            style={styles.image} />
          <div style={styles.personalInfoContainer}>
            <h3><span style={styles.spanTag}>Birthday: </span> {this.readableDate(contact.birthday)}</h3>
            <h3><span style={styles.spanTag}>Gender: </span> {contact.gender}</h3>
          </div>
        </div>
        <h2 style={styles.centerText}>
          <a style={styles.emailTag}
            href={this.clickableEmail(contact.email)}>{contact.email}
          </a>
        </h2>
        <CardFooter contact={contact} />
      </Card>
    );
  }
}

const styles = {
    root: {
      width: '30%',
      marginTop: '20px',
      overflow: 'hidden',
      background: `${colors.grey50}`,
      fontSize: '18px'
    },
    detailContainer: {
      width: '100%',
      display: 'flex',
      padding: '10px'
    },
    image: {
      width: '100px',
      height: '100px',
      borderRadius: '3px'
    },
    personalInfoContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '15px',
      margin: '5px 5px 5px 10px',
      fontSize: '14px'
    },
    spanTag: {
      color: `${colors.grey700}`
    },
    emailTag: {
      fontSize: '18px',
      color: `${colors.green400}`,
      textDecoration: 'none'
    },
    centerText: {
      textAlign: 'center',
      padding: '20px'
    }
};

export default CardItem;
