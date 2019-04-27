import Axios from "axios";
import { parseXMLResponse } from "../../api/parserApi";

export const FetchApiBooks = () => {
  return dispatch => {
    const apiKey = "kHZsEVYjvn6Hh865MHrrag";

    const searchText = "programming languages";

    const requestUri =
      `https://cors-anywhere.herokuapp.com/` +
      `https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${searchText}`;

    Axios.get(requestUri)
      .then(res => res.data)
      .then(data => {
        dispatch({ type: "FETCH_BOOKS", data: parseXMLResponse(data) });
      });
  };
};
