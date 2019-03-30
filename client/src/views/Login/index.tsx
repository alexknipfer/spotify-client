import React from 'react'
import { appConfig } from '../../config/appConfig'

export function Login() {
  return (
    <button
      onClick={() => (location.href = `${appConfig.spotifyApiUrl}/oauth/init`)}
    >
      Login with spotify
    </button>
  )
}
