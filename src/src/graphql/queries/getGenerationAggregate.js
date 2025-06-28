import { gql } from '@apollo/client';

export const GET_GENERATION_AGGREGATE = gql`
  query GetGenerationAggregate($generationName: String!, $nameFilter: String) {
    pokemonspecies_aggregate(where: { generation: { name: { _eq: $generationName } }, name: { _ilike: $nameFilter } }) {
      aggregate {
        count
      }
    }
  }
`;
