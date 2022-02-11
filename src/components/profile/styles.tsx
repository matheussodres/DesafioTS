import styled from 'styled-components'
import * as T from './types'

export const Box = styled.div<T.Box>`
  background: blue;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`
