const fetch = require('node-fetch');
import {setContext} from 'apollo-link-context';
import {ApolloClient, InMemoryCache, HttpLink} from 'apollo-boost';

module.exports.gqlFetchClient = () => {
  let uri;
  uri = process.env.NEXT_PUBLIC_GRAPHQL;

  const link = new HttpLink({
    uri: uri,
    fetch: fetch,
  });

  const authLink = setContext((_, {headers}) => {
    return {
      headers: {
        ...headers,
        authorization: `Basic ZG9taW5pa2hhaWQ6cWpKUm9dRU1GRg==`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(link),
    fetchOptions: {
      authorization: `Basic ZG9taW5pa2hhaWQ6cWpKUm9dRU1GRg==`,
      credentials: 'include',
    },
    headers: {
      authorization: `Basic ZG9taW5pa2hhaWQ6cWpKUm9dRU1GRg==`,
      credentials: 'include',
    },
    request: async operation => {
      operation.setContext({
        headers: {
          authorization: `Basic ZG9taW5pa2hhaWQ6cWpKUm9dRU1GRg==`,
          credentials: 'include',
        },
      });
    },
    cache: new InMemoryCache(),
  });

  return client;
};

module.exports.gqlReactClient = () => {
  let uri;
  uri = process.env.NEXT_PUBLIC_GRAPHQL;

  const link = new HttpLink({
    uri: uri,
  });

  const authLink = setContext((_, {headers}) => {
    return {
      headers: {
        ...headers,
        authorization: `Basic ZG9taW5pa2hhaWQ6cWpKUm9dRU1GRg==`,
      },
    };
  });

  const client = new ApolloClient({
    ssrMode: false,
    link: authLink.concat(link),
    fetchOptions: {
      authorization: `Basic ZG9taW5pa2hhaWQ6cWpKUm9dRU1GRg==`,
      credentials: 'include',
    },
    headers: {
      authorization: `Basic ZG9taW5pa2hhaWQ6cWpKUm9dRU1GRg==`,
      credentials: 'include',
    },
    request: async operation => {
      operation.setContext({
        headers: {
          authorization: `Basic ZG9taW5pa2hhaWQ6cWpKUm9dRU1GRg==`,
          credentials: 'include',
        },
      });
    },
    cache: new InMemoryCache(),
  });

  return client;
};
