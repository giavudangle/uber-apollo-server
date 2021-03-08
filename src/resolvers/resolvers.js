import Car from '../models/Car'
import argon2 from 'argon2'
import User from '../models/User'
import Order from '../models/Order'

export const resolvers = {
  Query: {
    /**
    |--------------------------------------------------
    | Car Queries
    |--------------------------------------------------
    */
    getListCars: () => {
      return Car.find()
    }

    /**
    |--------------------------------------------------
    | User Queries
    |--------------------------------------------------
    */




  },
  Mutation: {
    /**
    |--------------------------------------------------
    | Car Mutation
    |--------------------------------------------------
    */
    createCar: async (_, { carType, latitude, longitude, heading }, exts) => {
      const car = new Car({
        carType,
        latitude,
        longitude,
        heading,
      })
      await car.save();
      return car;
    },

    /**
    |--------------------------------------------------
    | User Mutation
    |--------------------------------------------------
    */
    createUser: async (_, { username, password, email }, exts) => {
      const hashedPassword = await argon2.hash(password);
      const user = new User({
        username,
        password: hashedPassword,
        email,
      })
      await user.save()
      return user;
    },


    /**
   |--------------------------------------------------
   | Order Mutation
   |--------------------------------------------------
   */
    createOrder : async (_,{userId,carId,origin,destination},exts) => {
      const order = new Order({
        userId,
        carId,    
        origin,
        destination
      })


      return await order.save();
    }

  }
}