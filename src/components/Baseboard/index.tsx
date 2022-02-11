import * as S from './styles'
import * as T from './types'

function Baseboard({ children, height, width }: T.Baseboard) {
  return (
    <S.Baseboard height={height} width={width}>
      {children}
    </S.Baseboard>
  )
}

export default Baseboard
