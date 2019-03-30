import * as express from 'express'
import { appConfig } from '../config/appConfig'

const router = express.Router()

const SCOPES = [
  'streaming',
  'user-follow-modify',
  'user-follow-read',
  'playlist-read-private',
  'playlist-modify-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'user-modify-playback-state',
  'user-read-private',
  'user-read-birthdate',
  'user-read-playback-state',
  'user-read-currently-playing',
  'user-read-email',
  'user-library-read',
  'user-library-modify',
  'user-top-read',
  'user-read-recently-played'
].join(' ')

router.get('/oauth/init', (req, res) => {
  const query = new URLSearchParams()
  query.set('response_type', 'code')
  query.set('client_id', appConfig.spotifyClientId)
  query.set('redirect_uri', appConfig.spotifyRedirectUri)
  query.set('scope', SCOPES)

  res.redirect(`https://accounts.spotify.com/authorize?${query}`)
})

export const spotifyAuthRoutes = router
