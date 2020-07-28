import React from 'react';
import PropTypes from 'prop-types';

const BookInformation = ({ book }) => {
  return (
    <div className="single-book details" data-test="component-book-information">
      <div className="single-book-container">
        <img src={book.cover} alt={book.title} />
        <div className="single-book-information">
          <h2>
            <a href={book.website}>{book.title}</a>
          </h2>
          {book.subtitle && <h3>{book.subtitle}</h3>}
          <p className="isbn">
            ISBN: {book.isbn ? book.isbn : 'No ISBN found'}
          </p>
          <p>
            Written by <strong>{book.author}</strong>
          </p>
          <p className="description">
            {book.description ? book.description : 'No description'}
          </p>
        </div>
      </div>
    </div>
  );
};

BookInformation.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookInformation;
