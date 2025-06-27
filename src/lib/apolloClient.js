// src/lib/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphql.pokeapi.co/v1beta2', // Reemplaza con tu endpoint real
  }),
  cache: new InMemoryCache(),
});

export default client;
