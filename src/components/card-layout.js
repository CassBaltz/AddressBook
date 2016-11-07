import React, { Component } from 'react';

import CardItem from './card-item';

class CardLayout extends Component {
  constructor(props) {
    super(props)
    this.mapCardItems = this.mapCardItems.bind(this);
  }

  mapCardItems() {
    let contacts = this.props.contacts;

    if (contacts) {
      return contacts.map(contact => {
        return <CardItem
        key={contact.id}
        contactDetail={contact}
        />
      });
    } else {
      return <h2>getting items</h2>
    }

  }

  render() {
    return (
      <div>
        <div>
          {this.mapCardItems()}
        </div>
      </div>
    );
  }
}


export default CardLayout;
