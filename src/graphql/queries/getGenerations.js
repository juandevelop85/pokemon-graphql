import { gql } from '@apollo/client';

export const GET_GENERATIONS = gql`
  query GetGenerations {
    generations: generation {
      name
    }
  }
`;
