import Axios from "axios";
import { parseXMLResponse, getDescription } from "../../api/parserApi";
const apiKey = "kHZsEVYjvn6Hh865MHrrag";

export const FetchApiBooks = () => {
  return function(dispatch) {
    const searchText = "programming languages";

    const requestUri =
      `https://cors-anywhere.herokuapp.com/` +
      `https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${searchText}`;

    return Axios.get(requestUri)
      .then(res => res.data)
      .then(data =>
        dispatch({ type: "FETCH_BOOKS", data: parseXMLResponse(data) })
      );
  };
};

export const GetDescription = id => {
  return dispatch => {
    const bookId = id;
    const requestUri =
      `https://cors-anywhere.herokuapp.com/` +
      `https://www.goodreads.com/book/show/${bookId}?key=${apiKey}`;

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
