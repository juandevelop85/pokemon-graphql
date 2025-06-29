import { gql } from '@apollo/client';

export const GET_POKEMON_INFO = gql`
  query GetPokemonInfo($pokemonId: Int!) {
    pokemon(where: { id: { _eq: $pokemonId } }) {
      height
      weight
      name
      pokemonabilities {
        ability {
          name
          abilitynames(where: { language_id: { _eq: 7 } }) {
            name
          }
        }
      }
      pokemonsprites {
        id
        sprites(path: "other.home.front_default")
      }
      pokemontypes {
        type {
          name
          typenames(where: { language_id: { _eq: 7 } }) {
            name
          }
        }
      }
      pokemonstats {
        effort
        base_stat
        stat {
          name
          statnames(where: { language_id: { _eq: 7 } }) {
            name
          }
        }
      }
    }
    pokemonspecies(where: { id: { _eq: $pokemonId } }) {
      gender_rate
    }
  }
`;
