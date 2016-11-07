import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/index';
import ContactsMiddleware from '../middleware/contacts-middleware';
import ContactMiddleware from '../middleware/contact-middleware';

const store = createStore(
              RootReducer,
              {},
              applyMiddleware(ContactsMiddleware, ContactMiddleware));

export default store;

window.store = store;
