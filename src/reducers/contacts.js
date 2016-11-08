import alphabetizeContacts from '../helper_functions/alphabetize';

const contacts = (state = [], action) => {
  switch (action.type) {
    case "RESET_STORE_CONTACTS":
      return alphabetizeContacts(action.payload);

    case "UPDATE_STORE_CONTACT":
      const updated = alphabetizeContacts(updateContact(state, action.payload));
      console.log('updated', updated);
      return updated;

    case "REMOVE_STORE_CONTACT":
      return alphabetizeContacts(removeContact(state, action.payload));

    case "ADD_STORE_CONTACT":
      const newC = alphabetizeContacts(addContact(state, action.payload));
      console.log('new', newC);
      return newC;

    default:
      return state;
  };
};

//filter functions

const updateContact = (state, updatedContact) => {
  let newList = [];
  state.forEach(contact => {
    if (contact.id === updatedContact.id) {
      newList.push(updatedContact);
    } else {
      newList.push(contact);
    }
  });
  return newList;
};

const addContact = (state, newContact) => {
  return [...state, newContact];
};

const removeContact = (state, deletedContact) => {
  let newList = [];
  state.forEach(contact => {
    if (deletedContact.id !== contact.id) {
      newList.push(contact);
    }
  });
  return newList;
};


export default contacts;
