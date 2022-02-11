import * as S from './styles'
import * as T from './types'

function Header({ children, height, width }: T.Header) {
  return (
    <S.Header height={height} width={width}>
      {children}
    </S.Header>
  )
}

export default Header
