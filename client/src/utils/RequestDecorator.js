import React from 'react';
import { Query } from 'react-apollo';

function RequestDecorator (Decorated, query) {
  return () => (
    <Query query={query}>
      {
        ({ loading, error, data }) => {
          if (loading) {
            return <h1>Loading...</h1>;
          }

          if(error) {
            return <h1>Something is wrong</h1>;
          }

          return <Decorated data={data} />;
        }
      }
    </Query>
  )
}

export default RequestDecorator;
