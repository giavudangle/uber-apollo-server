const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CoordinaionSchema = new Schema({
  longitude:Number,
  latitude:Number
})


const OrderSchema = new Schema({
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  },
  carType: {
    type: String
  },
  origin:{
    type:CoordinaionSchema
  },
  destination:{
    type:CoordinaionSchema
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  carId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Car'
  }
})





module.exports = mongoose.model('Order', OrderSchema)






