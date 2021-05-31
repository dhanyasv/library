import { ApolloClient,InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import  BookList  from './components/BookList';
import  AddBook  from './components/AddBook';

const client = new ApolloClient({
  uri: 'http://localhost:40000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
      <ApolloProvider client={client}>
      <div id="main">
        <h1>Library</h1>
        <BookList />
        <AddBook />
      </div>
      </ApolloProvider>
  );
}

export default App;
