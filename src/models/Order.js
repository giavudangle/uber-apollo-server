const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CoordinaionSchema = new Schema({
  longitude:Number,
  latitude:Number
})


const OrderSchema = new Schema({
  createdAt: {
    type: Date,
    default: new Date()
  },
  updatedAt: {
    type: Date,
    default: new Date()
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  carId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Car'
  },
  status:{
    type:Boolean,
    default:false
  },
  origin: {
    type:CoordinaionSchema,
    default : {
      latitude:0,
      longitude:0
    }
  },
  destination: {
    type:CoordinaionSchema,
    default : {
      latitude:0,
      longitude:0
    }
  }
})





module.exports = mongoose.model('Order', OrderSchema)






