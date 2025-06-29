import { gql } from '@apollo/client';

export const GET_POKEMONS_BY_GENERATION = gql`
  query GetPokemonsByGeneration($generationName: String!, $limit: Int!, $offset: Int!, $nameFilter: String) {
    pokemonspecies(
      where: { generation: { name: { _eq: $generationName } }, name: { _ilike: $nameFilter } }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      id
      name
      pokemons {
        pokemontypes {
          type {
            name
            typenames(where: { language_id: { _eq: 7 } }) {
              name
            }
          }
        }
        pokemonsprites {
          id
          sprites(path: "other.dream_world.front_default")
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
