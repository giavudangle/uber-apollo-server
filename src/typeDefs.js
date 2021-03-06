import { gql } from "apollo-server-core";

/**
 * 1. Define Model Mongoose
 * 2. Define Types GraphQL
 * 3. Define Types Query and Mutation
 * 4. Implement Resolver 
 */

export const typeDefs = gql`
  type Query {
    cars: [Car!]!
  }

  type Car {
    id: ID!
    type: String!
    latitude: Float
    longitude: Float,
    heading: Float, 
  }

  type Mutation {
    createCar(carType:String!,latitude:Float,longitude:Float,heading:Float) : Car!
  }
`