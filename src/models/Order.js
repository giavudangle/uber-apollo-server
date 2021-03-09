import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema


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
    type: _Schema.Types.ObjectId,
    ref:'User'
  },
  carId: {
    type: _Schema.Types.ObjectId,
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





export default model('Order', OrderSchema)






