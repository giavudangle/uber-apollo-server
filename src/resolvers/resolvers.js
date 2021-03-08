import Car from '../models/Car'

export const resolvers = {
  Query :{
    // Car Queries
    getListCars : () => {
      return Car.find()
    }
  },
  Mutation :{
    // Car Mutation
    createCar: async (_,{carType,latitude,longitude,heading},exts) => {
      const car = new Car({
        carType,
        latitude,
        longitude,
        heading
      })
      await car.save();
      return car;
    }
  }
}