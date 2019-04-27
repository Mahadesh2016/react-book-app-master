import React from "react";
import { Link } from "react-router-dom";

const Cards = props => {
  return (
    <div className="cards">
      {props.booksList.map((item, index) => {
        return (
          <div className="card" key={index}>
            <div className="overlay">
              <img src={item.best_book.image_url} alt="" />
              <div className="strip">
                <div className="like-menu" />
              </div>
            </div>
            <Link to={"/" + item.best_book.id}>
              <h2>{item.best_book.title}</h2>
            </Link>
            <br />
            <div>
              <b>Author:</b> {item.best_book.author.name}
            </div>
            <div>
              <b>Avg. Rating:</b> {item.average_rating}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
