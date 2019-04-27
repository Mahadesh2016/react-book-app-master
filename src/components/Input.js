import React, { Component } from "react";
import { connect } from "react-redux";
class Input extends Component {
  constructor(props) {
    super(props);

    this.ismounted = false;
  }

  componentDidMount() {
    this.ismounted = true;
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="input"
          placeholder="Search.. "
          value={this.props.input}
          onChange={this.props.handleInput}
        />
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
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
