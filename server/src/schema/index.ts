import { makeExecutableSchema } from 'graphql-tools'
import { types } from '../types'
import { resolvers } from '../resolvers'

export const schema = makeExecutableSchema({
  typeDefs: types,
  resolvers
})
