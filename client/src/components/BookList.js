import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import './BookList.scss';
import { BOOK_LIST_VIEW, BOOK_DETAILS_VIEW } from '../constants/';
import BookDetails from './BookDetails';
import RequestDecorator from '../utils/RequestDecorator';

function BookList({ data: { books } }) {
  const [ selectedBook, setSelectedBook ] = useState('');
  const [ view, setView ] = useState(BOOK_LIST_VIEW);

  function handleSelect(e, book) {
    e.preventDefault();
    setView(BOOK_DETAILS_VIEW);
    setSelectedBook(book);
  }

  function handleBack() {
    setView(BOOK_LIST_VIEW);
    setSelectedBook('');
  }

  return(
    <>
      {
        view === BOOK_LIST_VIEW && <>
          <h3 className="book-list__title">Book list:</h3>
          <ul>
            {
              books && books.map((book) =>
                <li className="book-list__name"
                    key={book.name}
                    onClick={(e) => handleSelect(e, book)}>
                  {book.name}
                </li>
              )
            }
          </ul>
        </>
      }
      {
        view === BOOK_DETAILS_VIEW && <BookDetails
          book={selectedBook}
          handleBack={handleBack} />
      }
    </>
  );
}

const GET_BOOKS = gql`
  {
    books{
      name
      genre
      authorId
      author{
        name
        age
      }
    }
  }
`;

export default RequestDecorator(BookList, GET_BOOKS)
