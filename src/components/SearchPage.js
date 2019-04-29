import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchList from "./SearchList";
import { connect } from "react-redux";
import {
  FetchApiBooks,
  FetchApiBooksbyFilter
} from "../store/actions/BooksAction";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.ismounted = false;
  }

  componentDidMount() {
    this.props.clearInput();
  }

  render() {
    return (
      <div className="search">
        <Link to="/">
          <i className="fa fa-times fa-2x top-bar" aria-hidden="true" />
        </Link>
        <div>
          <input
            type="text"
            className="input"
            value={this.props.input}
            onChange={this.props.handleInput}
          />
        </div>
        <SearchList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (this.ismounted) {
    this.ismounted = false;
    return {
      input: ""
    };
  }

  return {
    input: state.input
  };
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchBooks: () => {
      console.log(props.input);
      dispatch(FetchApiBooks(props.input));
    },
    handleInput: e => {
      if (e.target.value !== undefined && e.target.value.length > 0)
        dispatch(FetchApiBooksbyFilter(e.target.value));
    },
    clearInput: e => {
      dispatch({ type: "CLEAR_CHANGE", input: "" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
