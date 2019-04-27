import React from 'react'
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

 function SinglePageCard(props) {

  debugger;
     
  return (
    props.book ?
  <div className="div" data-sal="zoom-out"
  data-sal-delay="500"
  data-sal-duration="1200"
  data-sal-easing="ease-out-bounce">
    <Link to='/search'><i className="fa fa-search fa-2x top-bar" aria-hidden="true" ></i></Link>
    <div className="single-card">
   <div className="book"> {<img src={props.book.best_book.image_url} alt="" />}
   </div>
     <div className="book-text">
     <h1> {props.book.best_book.title}</h1>
     
   {/* <div className="text"  dangerouslySetInnerHTML={{__html:props.book.content}}></div> */}


   <div>
          <p>
            Published Date:{" "}
            {`${props.book.original_publication_day}/${
              props.book.original_publication_month
            }/${props.book.original_publication_year}`}
            .{" "}
            <a
              href={`https://www.goodreads.com/book/show/${
                props.book.best_book.id
              }`}
            >
              Learn More
            </a>
          </p>
        </div>


  <Link to='/' className="btn-back">Go back</Link>
     </div>
    
   
    </div>
  </div> :  <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
  )
}
const mapStateToProps = (state, ownProps) => {

  debugger;
    let slug = ownProps.match.params.item_slug;
    return{
        book: state.books.find(item => item.best_book.id === slug)
    }
}
export default connect(mapStateToProps)(SinglePageCard);