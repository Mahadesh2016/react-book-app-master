const initialState = {
  books: [],
  menu: [],
  value: "",
  search: [],
  author: [],
  likes: [],
  add: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS":
      debugger;
      return {
        ...state,
        books: action.data
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

    default:
      return state;
  }
};
export default reducer;
