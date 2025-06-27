import { gql } from '@apollo/client';

export const GET_POKEMONS_BY_GENERATION = gql`
  query GetPokemonsByGeneration($generationName: String!, $limit: Int!, $offset: Int!) {
    pokemonspecies(where: { generation: { name: { _eq: $generationName } } }, limit: $limit, offset: $offset, order_by: { id: asc }) {
      id
      name
    }
  }
`;
