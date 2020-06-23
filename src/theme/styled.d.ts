import 'styled-components'
import OpenColor from 'open-color'

declare module 'styled-components' {
  export interface DefaultTheme extends OpenColor {}
}
