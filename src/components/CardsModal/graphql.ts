import { gql } from "@apollo/client";

export const GET_CARDS_BY_PIPE = gql`
  query GetCardsByPipe($pipe_id: ID!, $first: Int, $after: String) {
    cards(pipe_id: $pipe_id, first: $first, after: $after) {
      edges {
        node {
          id
          title
          createdAt
          createdBy {
            displayName
            username
          }
          labels {
            color
            name
          }
          summary {
            title
            value
          }
          url
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
