import { gql } from '@apollo/client'

export const GET_PIPES_BY_ORGANIZATION = gql`
  query GetPipesByOrganization($id: ID!) {
    organization(id: $id) {
      id
      name
      pipes {
        id
        cards_count
        color
        name
        public
      }
    }
  }
`
