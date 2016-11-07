import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveContactsFromDatabase } from '../actions/contact-actions';
import filterContacts from '../helper_functions/filter-contacts';

import Header from '../components/header-component';
import Body from '../components/body-component';
import '../../css/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.showContacts = this.showContacts.bind(this);
  }

  componentWillMount() {
    this.props.receiveContacts();
  }

  showContacts() {
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header viewState={this.props.viewState} />
          <Body
            contacts={this.props.activeContacts}
            viewState={this.props.viewState}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeContacts: filterContacts(state.contacts, state.viewState),
  currentContact: state.currentContact,
  viewState: state.viewState
});

const mapDispatchToProps = dispatch => ({
  receiveContacts: () => dispatch(receiveContactsFromDatabase)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
