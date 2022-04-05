import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'

import { useApollo } from './utils/apollo'
import GlobalStyles from './styles/global'
import { Home } from './components/Home'

function App() {
  const client = useApollo()

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
