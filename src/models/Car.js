const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CarSchema = new Schema({
	carType: String,
  latitude: Number,
  longitude: Number,
  heading: Number,
})

module.exports = mongoose.model('Car', CarSchema)




