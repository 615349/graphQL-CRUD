import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BookList from './BookList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BookList/>
    </ApolloProvider>
  );
}

export default App;
