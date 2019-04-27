import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import SearchList from "./SearchList";

export default function SearchPage() {
  return (
    <div className="search">
      <Link to="/">
        <i className="fa fa-times fa-2x top-bar" aria-hidden="true" />
      </Link>
      <Input />
      <SearchList />
    </div>
  );
}
