import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let contact = this.props.contactDetail;
    return (
      <div>
        <h5>{contact.firstName}</h5>
      </div>
    );
  }
}


export default ListItem;
