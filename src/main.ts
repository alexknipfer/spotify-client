import { ApolloServer } from 'apollo-server-express'
import * as express from 'express'

import { environment } from './environment'
import resolvers from './resolvers'
import typeDefs from './schemas'
import { spotifyAuthRoutes } from './routes/spotifyAuthRoutes'

const app = express()

const server = new ApolloServer({
  resolvers,
  typeDefs,
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground
})

app.use('/', spotifyAuthRoutes)

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => server.stop())
}
