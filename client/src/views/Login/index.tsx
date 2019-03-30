import React from 'react'
import { appConfig } from '../../config/appConfig'
import { Container, LoginButton } from './style'
import { Banner } from './components/Banner'

export function Login() {
  return (
    <Container>
      <Banner />
      <LoginButton
        onClick={() =>
          (location.href = `${appConfig.spotifyApiUrl}/oauth/init`)
        }
      >
        Login with spotify
      </LoginButton>
    </Container>
  )
}
