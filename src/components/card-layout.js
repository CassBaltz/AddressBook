import React, { Component } from 'react';

import CardItem from './card-item';

class CardLayout extends Component {
  constructor(props) {
    super(props)
    this.mapCardItems = this.mapCardItems.bind(this);
  }

  mapCardItems() {
    let contacts = this.props.contacts;
    return this.props.contacts.map(contact => {
      return <CardItem
      key={contact.id}
      contactDetail={contact}
      />
    });
  }

  render() {
    return (
      <div className="card-layout-div" style={styles.root}>
        {this.mapCardItems()}
      </div>
    );
  }
}

const styles = {
    root: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center'
    }
};

export default CardLayout;
