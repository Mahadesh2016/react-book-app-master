import Axios from "axios";
import { parseXMLResponse, getDescription } from "../../api/parserApi";
import { REACT_APP_API_KEY, SEARCH_KEY } from "../../keys";

export const FetchApiBooks = () => {
  return function(dispatch) {
    const requestUri =
      `https://cors-anywhere.herokuapp.com/` +
      `https://www.goodreads.com/search/index.xml?key=${REACT_APP_API_KEY}&q=${SEARCH_KEY}`;

    return Axios.get(requestUri)
      .then(res => res.data)
      .then(data =>
        dispatch({ type: "FETCH_BOOKS", data: parseXMLResponse(data) })
      );
  };
};

export const FetchApiBooksbyFilter = input => {
  return function(dispatch) {
    console.log(input);

    let searchText = "";

    if (input !== undefined && input.length > 0) searchText = input;

    const requestUri =
      `https://cors-anywhere.herokuapp.com/` +
      `https://www.goodreads.com/search/index.xml?key=${REACT_APP_API_KEY}&q=${searchText}`;

    return Axios.get(requestUri)
      .then(res => res.data)
      .then(data =>
        dispatch({
          type: "FETCH_BOOKS_PARAM",
          data: parseXMLResponse(data),
          input: input
        })
      );
  };
};

export const GetDescription = id => {
  return dispatch => {
    const bookId = id;
    const requestUri =
      `https://cors-anywhere.herokuapp.com/` +
      `https://www.goodreads.com/book/show/${bookId}?key=${REACT_APP_API_KEY}`;

    return Axios.get(requestUri)
      .then(res => res.data)
      .then(data =>
        dispatch({ type: "GET_DESCRIPTION", data: getDescription(data) })
      )
      .catch(error => {
        this.setState({
          error: error.toString()
        });
      });
  };
};
