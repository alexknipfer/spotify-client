class AppConfig {
  public readonly introspectionEnabled: boolean
  public readonly graphqlPlaygroundEnabled: boolean
  public readonly spotifyClientId: string
  public readonly spotifyClientSecret: string
  public readonly spotifyRedirectUri: string

  constructor() {
    if (!process.env.SPOTIFY_CLIENT_ID) {
      throw new Error('Must configure spotify client id')
    }

    if (!process.env.SPOTIFY_CLIENT_SECRET) {
      throw new Error('Must configure spotify client secret')
    }

    if (!process.env.SPOTIFY_REDIRECT_URI) {
      throw new Error('Must configure spotify redirect uri')
    }

    this.introspectionEnabled = process.env.APOLLO_INTROSPECTION === 'true'
    this.graphqlPlaygroundEnabled = process.env.APOLLO_PLAYGROUND === 'true'
    this.spotifyClientId = process.env.SPOTIFY_CLIENT_ID
    this.spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET
    this.spotifyRedirectUri = process.env.SPOTIFY_REDIRECT_URI
  }
}

export const appConfig = new AppConfig()
