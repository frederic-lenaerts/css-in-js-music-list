import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    background: ${(props) => props.theme.gray[9]};
    color:  ${(props) => props.theme.gray[9]};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`

export default GlobalStyle
