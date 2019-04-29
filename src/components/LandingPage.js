import React, { Component } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FetchApiBooks } from "../store/actions/BooksAction";

export class LandingPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBooks();
  }
  render() {
    return (
      <div className="main-wrap">
        <div className="container">
          <Link to="/search">
            <i className="fa fa-search fa-2x top-bar" aria-hidden="true" />
          </Link>
          <h1>Good Reads Library</h1>
        </div>
        <h2 className="cards-title">Favourite</h2>

        <Cards booksList={this.props.booksList} />
      </div>
    );
  }
}

function mapStateToProps(state = []) {
  return {
    booksList: state.books
  };
}

const mapDispatchToProps = dispatch => {
  debugger;
  return {
    fetchBooks: () => {
      dispatch(FetchApiBooks());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
