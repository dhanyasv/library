import React from 'react';
import { useQuery } from '@apollo/client';
import { getBookByIdQuery } from '../queries/query';

const displayBook = (bookDetail) => {
    if(bookDetail){
        let book = bookDetail.book;
        return(
            <div>
                <p>{book.name}</p>
            </div>
        )
    }
}

const BookDetail = ({selected}) =>{
    const bookId = selected;
    const { loading, error, data } = useQuery(getBookByIdQuery,
        {
            variables: { id:bookId },
          });
    return(
        <div id="book-detail">
            {    displayBook(data) }
        </div>
    )
}

export default BookDetail;