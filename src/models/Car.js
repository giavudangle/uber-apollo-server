import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema


const CarSchema = new Schema({
	carType: String,
  latitude: Number,
  longitude: Number,
  heading: Number,
  createdAt:{
    type:Date,
    default: new Date()
  },
  updatedAt:{
    type:Date,
    default: new Date()
  },
})

export default model('Car', CarSchema)




