import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveContactsFromDatabase } from '../actions/contact-actions';
import filterContacts from '../helper_functions/filter-contacts';

import Header from '../components/header-component';
import Body from '../components/body-component';
import '../../css/App.css';

import { LinearLoading, colors } from '@bronto/components';

class App extends Component {
  constructor(props) {
    super(props)
    this.showContacts = this.showContacts.bind(this);
  }

  componentWillMount() {
    this.props.receiveContacts();
  }

  showContacts() {
    if (this.props.viewState.contactsFetched) {
      return <Body
        contacts={this.props.activeContacts}
        viewState={this.props.viewState}
        currentContact={this.props.currentContact}
      />
    } else {
      return <LinearLoading/>
    }
  }

  render() {
    return (
      <div className="App">
        <h3 style={headerStyle}>Address Book</h3>
        <Header
          viewState={this.props.viewState}
          currentContact={this.props.currentContact} />
        {this.showContacts()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeContacts: filterContacts(state.contacts, state.viewState),
  contactCount: state.contacts.length,
  currentContact: state.currentContact,
  viewState: state.viewState
});

const mapDispatchToProps = dispatch => ({
  receiveContacts: () => dispatch(receiveContactsFromDatabase)
});

const headerStyle = {
  display: 'block',
  fontSize: '32px',
  padding: '20px',
  background: colors.blue50,
  color: colors.dgrey400,
  textAlign: 'center'
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
