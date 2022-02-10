import * as S from './styles'
import * as T from './types'

function Button({ children, background }: T.Button) {
  return <S.Button background={background}>{children}</S.Button>
}

export default Button
