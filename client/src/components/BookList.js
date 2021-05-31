import React,{ useState }from 'react';
import  BookDetail  from './BookDetail';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/query';

const BookList =() => {
        const [selectedBook,setSelectedBook] = useState('');
        const { loading, error, data } = useQuery(getBooksQuery);
        if (error) return <p>Error :(</p>;
        if (loading){
            return <p>Loading...</p>
        } else {
            return(
                <div>
                    <ul id="book-list">
                    { data.books.map(({name,id}) =>
                        <li key={id} onClick={(e)=>{
                            setSelectedBook(id)
                        }}>{ name}</li>
                    )}
                    </ul>
                    { selectedBook && <BookDetail selected={selectedBook}/> }
                </div>
                
            );
        }
        
}
export default BookList;