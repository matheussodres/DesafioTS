import styled from 'styled-components'
import * as T from './types'

export const Footer = styled.div<T.Footer>`
  background: black;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  color: white;
`
