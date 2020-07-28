import React, { useContext } from 'react';
import { BooksContext } from '../BooksContext';
import BookInformation from './BookInformation';
import SingleBook from '../book-list/SingleBook';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import links from '../routing/links';

const BookDetail = ({
  match: {
    params: { id },
  },
}) => {
  const { books } = useContext(BooksContext);
  const currentBook = books.find((book) => book.id === id);
  const sameAuthorBooks = books.filter(
    (book) => book.author === currentBook.author && book.id !== currentBook.id,
  );

  return (
    <div className="book-list">
      <Link to={links.bookList.link} className="btn btn-back">
        Go Back To Listing
      </Link>
      <h1>Details About</h1>
      {currentBook && <BookInformation book={currentBook} />}
      {sameAuthorBooks && sameAuthorBooks.length ? (
        <>
          <h1>
            More Books of <strong>{currentBook.author}</strong>
          </h1>
          <ul>
            {sameAuthorBooks.map((book) => (
              <li key={book.id}>
                <SingleBook book={book} />
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
};

BookDetail.propTypes = {
  books: PropTypes.object,
};

export default BookDetail;
