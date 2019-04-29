import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SearchPage from "./components/SearchPage";
import SinglePageCard from "./components/SinglePageCard";

class App extends Component {
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

export default App;
