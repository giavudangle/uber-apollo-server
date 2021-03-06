const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CarSchema = new Schema({
	type: String,
  latitude: Number,
  longitude: Number,
  heading: Number,
  orderId:String
})

module.exports = mongoose.model('Car', CarSchema)




