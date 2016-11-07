import queryFilter from './query-filter';

const filterContacts = (contacts, viewStates) => {
  if (viewStates.hideBlocked === true) {
    contacts = contacts.filter(contact => !contact.blocked);
  }

  if (viewStates.query) {
    contacts = queryFilter(contacts, viewStates.query);
  }

  return contacts;
};

export default filterContacts;
