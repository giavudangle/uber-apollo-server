const mongoose = require('mongoose')
const Schema = mongoose.Schema


 const UserSchema = new Schema({
	username: {
		type: String
	},
	email: {
		type: String
	},
  orders:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Order'
	},
	createdAt:Date,
  updatedAt:Date
})

module.exports = mongoose.model('User', UserSchema)




