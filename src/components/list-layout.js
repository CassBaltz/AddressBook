import React, { Component } from 'react';

import ListItem from './list-item';

class ListLayout extends Component {
  constructor(props) {
    super(props)
    this.mapListItems = this.mapListItems.bind(this);
  }

  mapListItems() {
    let contacts = this.props.contacts;
    if (contacts) {
      return contacts.map(contact => {
        return <ListItem
        key={contact.id}
        contactDetail={contact}
        />
      })
    } else {
      return <li>getting contacts</li>;
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.mapListItems()}
        </ul>
      </div>
    );
  }
}


export default ListLayout;
