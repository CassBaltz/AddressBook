import { combineReducers } from 'redux';
import contactsReducer from './contacts';
import currentContactReducer from './current-contact';
import viewState from './view-states';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  currentContact: currentContactReducer,
  viewState: viewState
});

export default rootReducer;
