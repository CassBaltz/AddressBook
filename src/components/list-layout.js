import React, { Component } from 'react';

import ListItem from './list-item';
import { colors } from '@bronto/components';

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
      <table style={styles.root}>
        <thead>
          <tr style={{background: colors.dgrey500, color: colors.grey50}}>
            <th style={{textAlign: 'center'}}>NAME</th>
            <th style={{textAlign: 'center'}}>EMAIL</th>
            <th style={{textAlign: 'center'}}>BIRTHDAY</th>
            <th style={{textAlign: 'center'}}>GENDER</th>
            <th style={{textAlign: 'center'}}>VIEW</th>
            <th style={{textAlign: 'center'}}>EDIT</th>
          </tr>
        </thead>
        <tbody>
          {this.mapListItems()}
        </tbody>
      </table>
    );
  }
}

const styles = {
  root: {
    fontSize: '18px',
    background: `${colors.dgrey50}`,
    color: `${colors.grey700}`,
    margin: '20px auto'
  }
}


export default ListLayout;
