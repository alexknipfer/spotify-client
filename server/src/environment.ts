import { appConfig } from './config/AppConfig'

const defaultPort = 4000

interface Environment {
  apollo: {
    introspection: boolean
    playground: boolean
  }
  port: number | string
}

export const environment: Environment = {
  apollo: {
    introspection: appConfig.introspectionEnabled,
    playground: appConfig.graphqlPlaygroundEnabled
  },
  port: process.env.PORT || defaultPort
}
