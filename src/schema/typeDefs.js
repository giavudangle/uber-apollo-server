import { gql } from "apollo-server-core";



export const typeDefs = gql`

  # Root Type Definations
  type Query {
    # Car Query Type
    getListCars: [Car!]!
    getCar(carId:ID!) : Car
    
    # User Query Type
    getListUsers: [User!]!
    getUser(userId:ID!) : User

    # Order Query Type
    getListOrders: [Order!]!
    getOrder(orderId:ID!) : Order 

    
  }

  type Mutation {
    # Car Mutation Type
    createCar(carType:String!,latitude:Float!,longitude:Float!,heading:Float!) : Car
    updateCar(carType:String!) : Car
    deleteCar(carType:String!) : Boolean

    # User Mutation Type
    createUser(email:String!,username:String!,password:String!) : User!
    updateUser(userId:ID!) : User
    deleterUser(userId:ID!) : Boolean

    # Order Mutation Type
    createOrder(userId:ID!,carId:ID!) : Order
    deleteOrder(orderId:ID!) : Boolean

  }

  # type Subscription {
    
  # }


  type Coordination {
    longitude:Float,
    latitude:Float
  }

  # Attributes Type Definations
  type Car {
    id:ID!,
    carType:String!,
    latitude:Float,
    longitude:Float,
    heading:Float,
    createdAt:String,
    updatedAt: String
  }

  type Order {
    id:ID!,
    userId:String!,
    carId:String!,
    createdAt:String,
    updatedAt: String,
    origin: Coordination,
    destination : Coordination
  }


  type User {
    id:ID!,
    username:String!,
    email:String!,
    password:String!,
    orders:[Order!]
  }
`