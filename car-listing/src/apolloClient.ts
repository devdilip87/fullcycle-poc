// lib/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Replace with the actual URL of your GraphQL server
  cache: new InMemoryCache(),
});

export default client;
