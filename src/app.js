import {ApolloServer,gql} from 'apollo-server-express'

import {typeDefs} from './typeDefs'
import {resolvers} from './resolvers'


import express from 'express';

import mongoose from 'mongoose';



const Main  = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  })
  
  server.applyMiddleware({app})
  
  await mongoose.connect('mongodb://localhost:27017/uber-server',{
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
  .then(() => console.log('[DB] Database connected !!!'))
  
  
  app.listen({port:4000}, () => {
    console.log(`🚀  Server ready at https://localhost:4000${server.graphqlPath}`);
  })
}

Main() ;