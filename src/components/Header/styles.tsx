import styled from 'styled-components'
import * as T from './types'

export const Header = styled.div<T.Header>`
  background: green;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  color: black;
`
