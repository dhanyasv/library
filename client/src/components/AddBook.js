import React,{useState} from 'react';
import { useQuery,useMutation } from '@apollo/client';
import { getBooksQuery,getAuthorsQuery,addBookMutation } from '../queries/query';

const AddBook =() => {
    const [name,setName] = useState('');
    const [genre,setGenre] = useState('');
    const [authorId,setAuthorId] = useState('');
    const [addBookMut, { dataMutation }] = useMutation(addBookMutation);
    const { loading, error, data } = useQuery(getAuthorsQuery);
    const displayAuthors = () =>{
        if(loading){
            return(
                <option disabled>Loading.....</option>
            )
        } else {
            return(
                 data.authors.map(({name,id})=>(
                    <option key={id} value={id}>{name}</option>
                )) 
            )
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addBookMut({
            variables: {
              name: name,
              genre: genre,
              authorId: authorId,
            },
            refetchQueries:[{query:getBooksQuery}]
          });
    }
    return(
            <form id="addForm" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Book Name</label>
                    <input type="text" name="bookName" onChange={ (e)=>setName(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Genre</label>
                    <input type="text" name="genre" onChange={ (e)=>setGenre(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Author</label>
                    <select onChange={ (e)=>setAuthorId(e.target.value)}>
                        <option>Select Author</option>
                        { 
                            displayAuthors()
                        }
                    </select>
                </div>
                <button>+</button>
            </form>   
        );        
}
export default AddBook;