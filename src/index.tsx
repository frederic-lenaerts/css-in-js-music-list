import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'
import GlobalStyle from 'theme/globalStyles'

import App from './App'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
)
