const currentContact = (state = null, action) => {
  switch (action.type) {
    case "CLEAR_CURRENT_CONTACT":
      return null;

    case "UPDATE_CURRENT_CONTACT":
      return Object.assign({}, action.payload);
      
    default:
      return state;
  }
};

export default currentContact;
