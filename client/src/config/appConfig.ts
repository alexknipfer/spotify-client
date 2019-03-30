class AppConfig {
  public readonly spotifyApiUrl: string

  constructor() {
    if (!process.env.REACT_APP_SPOTIFY_API_URL) {
      throw new Error('Must configure spotify api url')
    }

    this.spotifyApiUrl = process.env.REACT_APP_SPOTIFY_API_URL
  }
}

export const appConfig = new AppConfig()
