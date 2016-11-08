import React, { Component } from 'react';

import { connect } from 'react-redux';
import _ from 'lodash';

import { FieldLabel, ActionField } from '@bronto/components';

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {values: this.props.activeContact};
    this.handleChange = this.handleChange.bind(this);
    this._getValue = this._getValue.bind(this);
    this.getHeaderText = this.getHeaderText.bind(this);
  }

  componentWillMount() {
    if (this.props.currentContact.id) {
      this.setState({formType: 'update'})
    } else {
      this.setState({formType: 'new'})
    }
  }

  getHeaderText() {
    const formType = this.state.formType;
    const text = formType === 'update' ? `Update ${this.props.activeContact.firstName} ${this.props.activeContact.lastName}'s Information` : 'Create New Contact';
    return text;
  }

  handleChange(payload) {
    let {name, value} = payload;
    const currentValues = this.state.values;

    const values = {
      ...currentValues,
      ...{[name]: value}
      };

    this.setState({
      values
    });
  }

  _getValue(name) {
    return this.state.values[name]
  }

  render() {
    return (
      <div>
        <h2>{this.state.formType}</h2>
        <
      </div>

    );
  }
}


export default ContactForm;
