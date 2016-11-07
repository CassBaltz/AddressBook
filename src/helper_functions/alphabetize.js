const alphabetizeContacts = (contacts) => {
  if (contacts.length <= 1) {
    return contacts;
  }

  let target = contacts[0];
  let remainder = contacts.slice(1);
  let left = [];
  let right = [];

  remainder.forEach(contact => {
    if (compareNames(contact, target) === -1) {
      left.push(contact);
    } else {
      right.push(contact);
    }
  });

  return alphabetizeContacts(left).concat(target).concat(alphabetizeContacts(right));

};

const compareNames = (first, second) => {
  if (first.lastName < second.lastName) {
    return -1;
  }

  if (first.lastName === second.lastName) {
    if (first.firstName <= second.firstName) {
      return -1;
    }
  }

  return 1;
}

export default alphabetizeContacts;
