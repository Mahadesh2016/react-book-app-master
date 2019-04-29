const initialState = {
  books: [],
  menu: [],
  value: "",
  search: [],
  author: [],
  likes: [],
  add: [],
  description: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS":
      debugger;
      return {
        ...state,
        books: action.data
      };
    case "GET_DESCRIPTION":
      debugger;
      return {
        ...state,
        description: action.data
      };
    case "CLEAR_DESCRIPTION":
      debugger;
      return {
        ...state,
        description: "Fetching description for this book..."
      };
    case "INPUT_CHANGE":
      console.log("Input", action);
      let newList = state.books.filter(item => {
        return (
          item.best_book.title
            .toLowerCase()
            .search(action.input.toLowerCase()) !== -1
        );
      });

      return {
        ...state,
        search: newList,
        value: action.input
      };

    case "CLEAR_CHANGE":
      console.log("Clear", action);

      return {
        ...state,
        search: [],
        value: ""
      };

    default:
      return state;
  }
};
export default reducer;
