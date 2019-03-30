import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import { Router } from '../../router'

const GlobalStyle = createGlobalStyle`
  html, body, main, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router />
    </Fragment>
  )
}
