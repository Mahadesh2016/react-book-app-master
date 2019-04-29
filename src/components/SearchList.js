import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function SearchList(props) {
  return (
    <div className="search-list">
      {props.value &&
        props.lists.map((item, index) => {
          return (
            <Link className="item" key={index} to={"/" + item.best_book.id}>
              <div className="item-title">{item.best_book.title}</div>
              <div className="item-author">{item.best_book.author.name}</div>
            </Link>
          );
        })}
    </div>
  );
}
const mapStateToProps = state => {
  console.log(state.value);
  return {
    lists: state.search,
    value: state.value
  };
};

export default connect(mapStateToProps)(SearchList);
