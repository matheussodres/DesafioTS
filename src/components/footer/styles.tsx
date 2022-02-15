import styled from 'styled-components'
import * as T from './types'

export const Footer = styled.div<T.Footer>`
  background: rgb(192, 45, 26);
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  color: white;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 2em;
`
