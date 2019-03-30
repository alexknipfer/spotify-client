import { styled } from '../../../../lib/theme'
import { ReactComponent as SpotifyLogo } from '../../../../assets/spotify-logo.svg'
import { media } from '../../../../lib/media'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.white};
  margin-bottom: 50px;
`

export const SpotifyIcon = styled(SpotifyLogo)`
  width: 150px;
  height: 150px;
  flex-shrink: 0;

  ${media.tablet`
    width: 300px;
    height: 300px;
  `}

  ${media.desktop`
    width: 300px;
    height: 300px;
  `}
`
