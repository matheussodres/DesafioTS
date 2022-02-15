import styled from 'styled-components'
import * as T from './types'

export const Profile = styled.div<T.Profile>`
  background: blue;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`
