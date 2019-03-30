import { ThemedStyledInterface } from 'styled-components'
import baseStyled from 'styled-components/macro'

export const theme = {
  black: '#000000',
  white: '#ffffff',
  green: '#1DB954'
}

export type Theme = typeof theme

export const styled = baseStyled as ThemedStyledInterface<Theme>
