import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { GetDescription } from "../store/actions/BooksAction";
export class SinglePageCard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getDescription();
  }
  render() {
    return this.props.book ? (
      <div
        className="div"
        data-sal="zoom-out"
        data-sal-delay="500"
        data-sal-duration="1200"
        data-sal-easing="ease-out-bounce"
      >
        <Link to="/search">
          <i className="fa fa-search fa-2x top-bar" aria-hidden="true" />
        </Link>
        <div className="single-card">
          <div className="book">
            {<img src={this.props.book.best_book.image_url} alt="" />}
            <div class="rating">
              <b>Avg. Rating:</b> {this.props.book.average_rating}
            </div>
          </div>

          <div className="book-text">
            <h1> {this.props.book.best_book.title}</h1>

            <div className="col-lg-10 col-sm-8 innercontainer">
              {
                <p
                  dangerouslySetInnerHTML={{ __html: this.props.description }}
                />
              }
            </div>

            <div>
              <p>
                Published Date:{" "}
                {`${this.props.book.original_publication_day}/${
                  this.props.book.original_publication_month
                }/${this.props.book.original_publication_year}`}
                .{" "}
                <a
                  href={`https://www.goodreads.com/book/show/${
                    this.props.book.best_book.id
                  }`}
                >
                  Learn More
                </a>
              </p>
            </div>

            <Link to="/" className="btn-back">
              Go back
            </Link>
          </div>
        </div>
      </div>
    ) : (
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  debugger;
  let slug = ownProps.match.params.item_slug;
  return {
    book: state.books.find(item => item.best_book.id === slug),
    description: state.description
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  debugger;
  let slug = ownProps.match.params.item_slug;
  return {
    getDescription: () => {
      dispatch({ type: "CLEAR_DESCRIPTION", payload: "" });
      dispatch(GetDescription(slug));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePageCard);
