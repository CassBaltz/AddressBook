const queryFilter = (contacts, query) => {
  let filteredContacts = [];
  let regex = new RegExp(query, "i");

  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName.search(regex) >= 0) {
      filteredContacts.push(contacts[i]);
      continue;
    }

    if (contacts[i].lastName.search(regex) >= 0) {
      filteredContacts.push(contacts[i]);
    }
  };

  return filteredContacts;
};

export default queryFilter;
