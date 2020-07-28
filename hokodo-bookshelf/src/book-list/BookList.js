import React, { useContext } from 'react';
import { BooksContext } from '../BooksContext';
import SingleBook from './SingleBook';

const BookList = () => {
  const { books } = useContext(BooksContext);

  return (
    <div className="book-list">
      <h1>Hokodo Bookshelf</h1>
      <ul>
        {books && books.length
          ? books.map((book) => (
              <li key={book.id}>
                <SingleBook book={book} />
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default BookList;
