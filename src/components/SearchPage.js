import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchList from "./SearchList";
import { connect } from "react-redux";

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
const mapDispatchToProps = dispatch => {
  return {
    handleInput: e => {
      dispatch({ type: "INPUT_CHANGE", input: e.target.value });
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
