import * as S from './styles'
import * as T from './types'

function Footer({ children, height, width }: T.Footer) {
  return (
    <S.Footer height={height} width={width}>
      {children}
    </S.Footer>
  )
}

export default Footer
