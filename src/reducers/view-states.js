import merge from 'lodash/merge';

const defaultState = {
  cardView: false,
  query: null,
  hideBlocked: false
};

const viewState = (state = defaultState, action) => {
  switch (action.type) {
    case "TOGGLE_LAYOUT_VIEW":
      return merge({}, state, {cardView: !state.cardView});

    case "UPDATE_SEARCH_QUERY":
      return merge({}, state, {query: action.payload});

    case "CLEAR_SEARCH_QUERY":
      return merge({}, state, {query: null});

    case "TOGGLE_BLOCKED_CONTACTS":
      return merge({}, state, {hideBlocked: !state.hideBlocked});

    default:
      return state;
  }
};

export default viewState;
