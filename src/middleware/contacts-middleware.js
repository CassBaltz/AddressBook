import {resetStoreContacts,
        fetchContacts,
        createContacts,
        receiveContactsFromDatabase } from '../actions/contact-actions';

const contactsMiddleware = ({ dispatch }) => next => action => {
  const successFetchCallback = contacts => {
    if (contacts.length === 0) {
      createContacts(20)
      dispatch(receiveContactsFromDatabase)
    } else {
      dispatch(resetStoreContacts(contacts))
    }
  };

  const errorCallback = errors => console.log(errors);

  switch (action.type) {
    case "RECEIVE_CONTACTS_FROM_DATABASE":
      fetchContacts(successFetchCallback, errorCallback);
      return next(action);

    default:
      return next(action);
  };
};

export default contactsMiddleware;
