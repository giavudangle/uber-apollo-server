const User = require('../models/User');
const Order = require('../models/Order');
const Car = require('../models/Car');


const dbHelper = {
	getAllCars: async (condition = null) =>
		condition === null ? await Car.find() : await Car.find(condition),
	getCarById: async id => await Car.findById(id),
	getAllUsers: async () => await Users.find(),
	getUserById: async id => await Users.findById(id),
	createUser: async args => {
		const newAuthor = new User(args)
		return await newAuthor.save()
	},
	createOrder: async args => {
		const newOrder = new Order(args)
		return await newOrder.save()
	}
}

module.exports = dbHelper
