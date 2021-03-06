const mongoose = require('mongoose')
const Schema = mongoose.Schema


 const OrderSchema = new Schema({
	createdAt:{
    type:Date
  },
  type: {
    type:String
  },
  originLatitude:{
    type:Number
  },
  oreiginLongitude: {
    type:Number
  },
  destLatitude: {
    type:Number
  },
  destLongitude: {
    type:Number
  },
  userId: {
    type:String
  },
  carId: {
    type:String
  }
})

 



module.exports = mongoose.model('Order', OrderSchema)






