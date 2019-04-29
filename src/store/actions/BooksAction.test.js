import * as bookActions from "./BooksAction";
import { parseXMLResponse } from "../../api/parserApi";
import thunk from "redux-thunk";
import fectchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import { data } from "../../mockData/mockData";

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Aync Actions", () => {
  afterEach(() => {
    fectchMock.restore();
  });
});

describe("fetch books create action", () => {
  it("it should create FETCH_BOOKS action", () => {
    // xml mock data imported.
    const books = data;

    fectchMock.mock("*", {
      body: books,
      headers: { "content-type": "application/xml" }
    });

    const expectedActions = [
      {
        type: "FETCH_BOOKS",
        data: parseXMLResponse(books)
      }
    ];

    const store = mockStore({});

    return store.dispatch(bookActions.FetchApiBooks()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("get Description create action", () => {
  it("it should create GET_DESCRIPTION action", () => {
    const expectedActions = [
      {
        type: "GET_DESCRIPTION",
        data: "No description found."
      }
    ];

    const store = mockStore({});

    return store.dispatch(bookActions.GetDescription(112251)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
