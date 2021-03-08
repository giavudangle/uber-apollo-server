import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema


const CarSchema = new Schema({
	carType: String,
  latitude: Number,
  longitude: Number,
  heading: Number,
  createdAt:Date,
  updatedAt:Date
})

export default model('Car', CarSchema)




