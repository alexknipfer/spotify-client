import { ApolloServer } from 'apollo-server-express'
import * as express from 'express'

import { spotifyAuthRoutes } from './routes/spotifyAuthRoutes'
import { appConfig } from './config/appConfig'
import { schema } from './schema'

const app = express()

const server = new ApolloServer({
  schema,
  introspection: appConfig.introspectionEnabled,
  playground: appConfig.graphqlPlaygroundEnabled
})

app.use('/', spotifyAuthRoutes)

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
