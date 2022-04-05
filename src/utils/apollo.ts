import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { relayStylePagination } from '@apollo/client/utilities'
import { useMemo } from 'react'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    uri: process.env.REACT_APP_PIPEFY_API_URL || '',
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            cards: relayStylePagination(['pipe_id'])
          }
        }
      }
    }),
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_PIPEFY_API_TOKEN || ''}`
    },
    credentials: 'same-origin'
  })
}

export function initializeApollo(initialState = {}) {
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
