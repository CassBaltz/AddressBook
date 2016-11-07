import React, { Component } from 'react';

import { Card } from '@bronto/components';

class CardItem extends Component {
  constructor(props) {
    super(props)
    this.setDisplayName = this.setDisplayName.bind(this);
  }

  setDisplayName(contact) {
    return `${contact.firstName} ${contact.lastName}`;
  }

  render() {
    let contact = this.props.contactDetail;
    return (
      <Card headerText={this.setDisplayName(contact)}
            style={styles.root}>

      </Card>
    );
  }
}

const styles = {
    root: {
      width: '30%',
      marginTop: '10px'
    },

    next: {

    }

};

export default CardItem;
