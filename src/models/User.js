const mongoose = require('mongoose')
const Schema = mongoose.Schema


 const UserSchema = new Schema({
	username: {
		type: String
	},
	email: {
		type: String
	},
  orderId:String
})

module.exports = mongoose.model('User', UserSchema)




