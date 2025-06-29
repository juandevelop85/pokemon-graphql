import { gql } from '@apollo/client';

export const GET_EVOLUTION_CHAIN = gql`
  query GetEvolutionChain($id: Int!) {
    evolutionchain(where: { pokemonspecies: { pokemons: { id: { _eq: $id } } } }) {
      id
      pokemonspecies(order_by: { order: asc }) {
        name
        is_baby
        is_mythical
        is_legendary
        evolves_from_species_id
        id
        evolution_chain_id
        order
        pokemons {
          pokemonsprites {
            id
            sprites(path: "other.home.front_default")
          }
        }
      }
    }
  }
`;
