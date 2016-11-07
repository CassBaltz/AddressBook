import {
        createContact,
        deleteContact,
        updateContact,
        addStoreContact,
        removeStoreContact,
        updateStoreContact
        } from '../actions/contact-actions';


const contactMiddleware = ( {dispatch} ) => next => action => {
    const createSuccess = contact => {
      dispatch(addStoreContact(contact))
    };

    const deleteSuccess = contact => {
      dispatch(removeStoreContact(contact))
    };

    const updateSuccess = contact => {
      dispatch(updateStoreContact(contact))
    };

    const errorCallback = errors => {
      console.log("There was a problem: ", errors);
    };

    switch (action.type) {
      case "CREATE_NEW_CONTACT_IN_DATABASE":
        createContact(action.payload, createSuccess, errorCallback);
        return next(action);

      case "DELETE_CONTACT_FROM_DATABASE":
        deleteContact(action.payload, deleteSuccess, errorCallback);
        return next(action);

      case "UPDATE_CONTACT_IN_DATABASE":
        updateContact(action.payload, updateSuccess, errorCallback);
        return next(action);

      default:
        return next(action);
    };
};

export default contactMiddleware;
