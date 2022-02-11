import styled from 'styled-components'
import * as T from './types'

export const Baseboard = styled.div<T.Baseboard>`
  background: blue;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`
