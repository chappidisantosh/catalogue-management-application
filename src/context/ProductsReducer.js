export const ProdReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL": {
      return {
        ...state,
        modal: true,
      };
    }

    case "CLOSE_MODAL": {
      return {
        ...state,
        modal: false,
      };
    }

    case "SEARCH_BY_QUERY": {
      return {
        ...state,
        searchQuery: action.payload,
      };
    }

    case "FILTER_BY_CATEGORY": {
      return {
        ...state,
        filter: action.payload,
      };
    }

    default:
      return state;
  }
};
