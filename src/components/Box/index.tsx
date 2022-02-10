import * as S from './styles'
import * as T from './types'

function Box({ children, height, width }: T.Box) {
  return (
    <S.Box height={height} width={width}>
      {children}
    </S.Box>
  )
}

export default Box
