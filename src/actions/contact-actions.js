import { AddressBookController, Contact } from 'address-book-data';

const addressBook = new AddressBookController ();

//ALL CONTACTS DISPATCH FUNCTION

export const receiveContactsFromDatabase = {
  type: "RECEIVE_CONTACTS_FROM_DATABASE"
};

//ALL CONTACTS API CALL

export const fetchContacts = (success, error) => {
  addressBook.getContacts().then(contacts => success(contacts)).catch(errors => error(errors));
};

//ALL CONTACTS CREATE API CALLS

export const createContacts = (num) => {
  addressBook.generateSampleContacts(num)
};

//ALL CONTACTS RESET STORE DISPATCH FUNCTION

export const resetStoreContacts = contacts => ({
  type: "RESET_STORE_CONTACTS",
  payload: contacts
});

//SINGLE CONTACT API CALLS

export const createContact = (contact, success, error) => {
  const newContact =  new Contact ()
                      .setFirstName(contact.firstName)
                      .setLastName(contact.lastName)
                      .setEmail(contact.email)
                      .setImageUrl(contact.imageUrl)
                      .setGender(contact.gender)
                      .setBlocked(contact.blocked)
                      .setBirthday(contact.birthday);

  addressBook.saveContact(newContact).then(savedContact => success(savedContact)).catch(errors => error(errors));
};

export const deleteContact = (contact, success, error) => {
  addressBook.deleteContact(contact.id).then(deletedContact => success(deletedContact)).catch(errors => error(errors));
};

export const updateContact = (contact, success, error) => {
  addressBook.saveContact(contact).then(updatedContact => success(updatedContact)).catch(errors => error(errors));
};

export const toggleBlockedSetting = (contact, success, error) => {
  contact.blocked = !contact.blocked;
  addressBook.saveContact(contact).then(updatedContact => success(updatedContact)).catch(errors => error(errors));
}

//SINGLE CONTACT DISPATCH FUNCTIONS

export const addStoreContact = (contact) => ({
  type: "ADD_STORE_CONTACT",
  payload: contact
});

export const removeStoreContact = (contact) => ({
  type: "REMOVE_STORE_CONTACT",
  payload: contact
});

export const updateStoreContact = (contact) => ({
  type: "UPDATE_STORE_CONTACT",
  payload: contact
});

//CURRENT CONTACT DISPATCH FUNCTIONS

export const clearCurrentContact = {
  type: "CLEAR_CURRENT_CONTACT"
};

export const updateCurrentContact = (contact) => ({
  type: "UPDATE_CURRENT_CONTACT",
  payload: contact
});

//TOGGLE BLOCKED CONTACT DISPATCH

export const toggleBlockedContact = (contact) => ({
  type: "TOGGLE_BLOCKED_CONTACT_IN_DATABASE",
  payload: contact
});

window.addressBook = addressBook;
