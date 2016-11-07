import React, { Component } from 'react';

import ListItem from './list-item';

class ListLayout extends Component {
  constructor(props) {
    super(props)
    this.mapListItems = this.mapListItems.bind(this);
  }

  mapListItems() {
    const contacts = this.props.contacts;
      return contacts.map(contact => {
        return <ListItem
        key={contact.id}
        contactDetail={contact}
        />
      })
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
