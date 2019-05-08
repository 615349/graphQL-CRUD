import React from 'react';
import './BookDetails.scss';

function BookDetails({ book, handleBack }) {
  return (
    <>
      <div className="book-details__arrow" onClick={handleBack}>&#8592;</div>
      <div>name: {book.name}</div>
      <div>genre: {book.genre}</div>
      <div>author name: {book.author && book.author.name}</div>
      <div>author age: {book.author && book.author.age}</div>
    </>
  );
}

export default BookDetails;
