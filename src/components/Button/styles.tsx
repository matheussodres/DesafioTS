import styled from 'styled-components'
import * as T from './types'

export const Button = styled.button<T.Button>`
  background: ${({ background }) => background};
  color: white;
`
