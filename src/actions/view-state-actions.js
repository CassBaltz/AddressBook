export const toggleLayoutView = {
  type: "TOGGLE_LAYOUT_VIEW"
};

export const updateSearchQuery = query => ({
  type: "UPDATE_SEARCH_QUERY",
  payload: query
});

export const clearSearchQuery = {
  type: "CLEAR_SEARCH_QUERY"
};

export const toggleBlockedContacts = {
  type: "TOGGLE_BLOCKED_CONTACTS"
};
