import * as S from './styles'
import * as T from './types'

function Profile({ children, height, width }: T.Profile) {
  return (
    <S.Profile height={height} width={width}>
      {children}
    </S.Profile>
  )
}

export default Profile
