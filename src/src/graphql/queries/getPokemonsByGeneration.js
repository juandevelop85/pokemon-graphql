import { gql } from '@apollo/client';

export const GET_POKEMONS_BY_GENERATION = gql`
  query GetPokemonsByGeneration($generationName: String!, $limit: Int!, $offset: Int!, $nameFilter: String) {
    pokemonspecies(
      where: { generation: { name: { _eq: $generationName } }, name: { _ilike: $nameFilter } }
      limit: $limit
      offset: $offset
      order_by: { id: asc }
    ) {
      id
      name
      pokemons {
        pokemontypes {
          type {
            name
          }
        }
      }
    }
    pokemonspecies_aggregate(where: { generation: { name: { _eq: $generationName } } }) {
      aggregate {
        count
      }
    }
  }
`;
