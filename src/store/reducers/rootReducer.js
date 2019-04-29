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
      return {
        ...state,
        books: action.data
      };
    case "FETCH_BOOKS_PARAM":
      const newstate = {
        ...state,
        books: action.data
      };

      let newList = newstate.books.filter(item => {
        return (
          item.best_book.title
            .toLowerCase()
            .search(action.input.toLowerCase()) !== -1 ||
          item.best_book.author.name
            .toLowerCase()
            .search(action.input.toLowerCase()) !== -1
        );
      });

      return {
        ...newstate,
        search: newList,
        value: action.input
      };
    case "GET_DESCRIPTION":
      return {
        ...state,
        description: action.data
      };
    case "CLEAR_DESCRIPTION":
      return {
        ...state,
        description: "Fetching description for this book..."
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
