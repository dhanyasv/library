import { useQuery,gql } from '@apollo/client';

const getBooksQuery = gql`
{
    books{
        name
        id
    }
}
`
const getAuthorsQuery = gql`
{
    authors{
        name
        age
        id
    }
}
`
const addBookMutation = gql`
mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
        name
}
}
`
const getBookByIdQuery = gql`
    query Book($id:ID){
        book(id:$id){
            id,
            name,
            genre,
            author{
                name,
                age,
                id,
                books{
                    name,
                    id
                }
            }
        }
    }
`

export {getBooksQuery,getAuthorsQuery,addBookMutation,getBookByIdQuery};