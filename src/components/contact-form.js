import React, { Component } from 'react';

import update from 'react-addons-update';

import { clearCurrentContact, updateContactInDatabase, deleteContactFromDatabase, createContactInDatabase } from '../actions/contact-actions';

import { connect } from 'react-redux';

import { RadioField, FieldLabel, ActionField, SelectField, colors, ActionButton } from '@bronto/components';

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {values: this.props.currentContact};
    this.getHeaderText = this.getHeaderText.bind(this);
    this.updateBirthday = this.updateBirthday.bind(this);
    this.renderSubmitButtons = this.renderSubmitButtons.bind(this);
    this.getButtonText = this.getButtonText.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.capitalize = this.capitalize.bind(this);
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
    const text = (formType === 'update') ? `Update ${this.props.currentContact.firstName} ${this.props.currentContact.lastName}'s Information` : 'Create New Contact';
    return text;
  }

  capitalize(name) {
    if (name.length > 0) {
      return name[0].toUpperCase() + name.slice(1).toLowerCase();
    }

    return "";
  }

  getButtonText() {
    return `DELETE ${this.state.values.firstName}`;
  }

  updateBirthday(e) {
    this.setState({
      values: update(this.state.values, {$merge: {'birthday': e.target.value}})})
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.dispatch(deleteContactFromDatabase(this.state.values));
    this.props.dispatch(clearCurrentContact);
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.dispatch(updateContactInDatabase(this.state.values));
    this.props.dispatch(clearCurrentContact);
  }

  handleCreate(e) {
    e.preventDefault();
    this.props.dispatch(createContactInDatabase(this.state.values));
    this.props.dispatch(clearCurrentContact);
  }

  dateToString(date) {
    if (date instanceof Date) {
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      return `${year}-${month}-${day}`;
    } else {
      return ''
    }
  }

  renderSubmitButtons() {
    if (this.state.formType === 'update') {
      return (
        <div style={styles.flex}>
          <ActionButton
            label={this.getButtonText()}
            style={styles.close}
            onClick={this.handleDelete}
          />
          <ActionButton
            label='UPDATE'
            style={styles.update}
            onClick={this.handleUpdate}
          />
        </div>
      );
    } else {
      return (
        <ActionButton
          label='SUBMIT'
          style={styles.submit}
          onClick={this.handleCreate}
        />
      );
    }
  }

  render() {
    return (
      <div style={styles.root}>
        <ActionButton
          label="x"
          style={styles.close}
          onClick={() => this.props.dispatch(clearCurrentContact)}
        />

        <h2 style={styles.header}>
          {this.getHeaderText()}
        </h2>

        <form style={styles.form}>
          <div style={styles.name}>
            <div>
              <FieldLabel label="First Name" />
              <ActionField name="plainTextField"
                width="200"
                value={this.state.values.firstName}
                onChange={(payload) => this.setState({
                  values: update(this.state.values,  {$merge: {'firstName': this.capitalize(payload.value)}})})}
              />
            </div>
            <div>
              <FieldLabel label="Last Name" />
              <ActionField name="plainTextField"
                width="200"
                value={this.state.values.lastName}
                onChange={(payload) => this.setState({
                  values: update(this.state.values, {$merge: {'lastName': this.capitalize(payload.value)}})})}
              />
            </div>
          </div>
          <div style={{marginBottom: '15px'}}>
            <FieldLabel label="Email" />
            <ActionField name="plainTextField"
              value={this.state.values.email}
              onChange={(payload) => this.setState({
                values: update(this.state.values, {$merge: {'email': payload.value}})})}
            />
          </div>
          <div style={{marginBottom: '15px'}}>
            <FieldLabel label="Birthday" />
            <input
              type="date"
              name="BirthdayField"
              value={this.dateToString(this.state.values.birthday)}
              onChange={this.updateBirthday}
            />
          </div>
          <div style={{marginBottom: '15px'}}>
            <FieldLabel label="Image Url" />
            <ActionField name="plainTextField"
              value={this.state.values.imageUrl}
              onChange={(payload) => this.setState({
                values: update(this.state.values, {$merge: {'imageUrl': payload.value}})})}
            />
          </div>
          <div style={styles.name}>
            <SelectField
              name="gender"
              value={this.state.values.gender}
              width={"150"}
              defaultValue={this.state.values.gender}
              listItems={[{value: null, text:'Select Gender'}, {value:'Female', text:'Female'},
              {value:'Male', text:'Male'}]}
              onChange={(payload) => this.setState({
                values: update(this.state.values, {$merge: {'gender': payload.value}})})}
            />
            <div>
              <FieldLabel label="Block Contact?" />
              <RadioField name="blockedUserRadio"
                label="Yes"
                value={true}
                checked={this.state.values.blocked === true}
                onChange={(payload) => this.setState({
                  values: update(this.state.values, {$merge: {'blocked': payload.value}})})}
              />
              <RadioField name="blockedUserRadio"
                label="No"
                value={false}
                checked={this.state.values.blocked === false}
                onChange={(payload) => this.setState({
                  values: update(this.state.values, {$merge: {'blocked': payload.value}})})}
              />
            </div>
          </div>
          {this.renderSubmitButtons()}
        </form>
      </div>

    );
  }
}

const styles = {
  root: {
    position: 'absolute',
    borderLeft: `40px solid ${colors.blue200}`,
    borderRight: `40px solid ${colors.blue200}`,
    borderBottom: `40px solid ${colors.blue200}`,
    padding: '20px',
    zIndex: 1,
    background: `white`,
    text: `${colors.grey800}`,
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    fontSize: '24px',
    fontWeight: '900',
    alignSelf: 'center',
    padding: '15px 0'
  },
  form: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column'
  },
  close: {
    background: `${colors.red300}`,
    color: `${colors.grey50}`,
    alignSelf: 'flex-end'
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  submit: {
    background: `${colors.green300}`,
    color: `${colors.grey50}`,
  },
  update: {
    background: `${colors.green300}`,
    color: `${colors.grey50}`,
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '15px'
  }
}


export default connect()(ContactForm);
