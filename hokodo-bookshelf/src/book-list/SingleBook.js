import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import links from '../routing/links';

const SingleBook = ({ book }) => {
  return (
    <div className="single-book" data-test="component-single-book">
      <div className="single-book-container">
        <img src={book.cover} alt={book.title} />
        <div className="single-book-information">
          <h2>
            <a href={book.website} data-test="book-title">
              {book.title}
            </a>
          </h2>
          <p>
            Written by <strong>{book.author}</strong>
          </p>

          <Link
            to={links.bookDetail.link(book.id)}
            className="btn btn-more-info"
            data-test="button-more-information"
          >
            More Information
          </Link>
        </div>
      </div>
    </div>
  );
};

SingleBook.propTypes = {
  book: PropTypes.object.isRequired,
};

export default SingleBook;
