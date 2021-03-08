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
    createUser(username:String!,password:String!) : User!
    updateUser(userId:ID!) : User
    deleterUser(userId:ID!) : Boolean

    # Order Mutation Type
    createOrder(userId:ID!,carId:ID!) : Order
    deleteOrder(orderId:ID!) : Boolean

  }


  # Attributes Type Definations
  type Car {
    id:ID!,
    carType:String!,
    latitude:Float,
    longitude:Float,
    heading:Float
  }

  type Order {
    id:ID!,
    userId:String!,
    user:User!,
    carId:String!,
    car:Car!
  }


  type User {
    id:ID!,
    username:String!,
    password:String!,
    orders:[Order!]
  }
`