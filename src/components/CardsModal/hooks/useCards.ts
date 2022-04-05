import { useQuery } from '@apollo/client'

import { GET_CARDS_BY_PIPE } from '../graphql'
import {
  GetCardsByPipe,
  GetCardsByPipeVariables
} from '../__generated__/GetCardsByPipe'

export interface IQueryCards {
  pipeId: string
  first?: number
  after?: string | null
}

const useCards = ({ pipeId, first = 3, after = null }: IQueryCards) => {
  const { data, error, loading, fetchMore } = useQuery<
    GetCardsByPipe,
    GetCardsByPipeVariables
  >(GET_CARDS_BY_PIPE, {
    variables: {
      pipe_id: pipeId,
      first,
      after
    },
    fetchPolicy: 'cache-and-network'
  })

  return {
    error,
    data,
    loading,
    fetchMore
  }
}

export default useCards
