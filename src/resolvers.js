import Car from './models/Car'


export const resolvers = {
  Query:{
    cars : () => {
      return Car.find()
    }
  },
  Mutation:{
    createCar: async (_,{carType}) => {
      const car = new Car({
        type:carType
      })
      await car.save();
      return car;
    }
  }
}