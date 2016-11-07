import React, { Component } from 'react';

class CardItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let contact = this.props.contactDetail;
    return (
      <div>
        <h1>{contact.firstName} {contact.lastName}</h1>
      </div>
    );
  }
}

export default CardItem;
