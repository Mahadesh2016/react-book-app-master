import React, { Component } from "react";
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LandingPage from "./components/LandingPage";
import { FetchApiBooks } from "./store/actions/BooksAction";
import SearchPage from "./components/SearchPage";
import SinglePageCard from "./components/SinglePageCard";

export class App extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/search" exact component={SearchPage} />
            <Route path="/:item_slug" exact component={SinglePageCard} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => {
      dispatch(FetchApiBooks());
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(App);
