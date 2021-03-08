const mongoose = require('mongoose')
const Schema = mongoose.Schema


 const UserSchema = new Schema({
	username: {
		type: String,
		unique:true
	},
	email: {
		type: String,
		unique:true
	},
	password:{
		type:String
	},
  orders:[{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Order',
		default:[]	
	}],
	createdAt:{
		type:Date,
		default: new Date()
	},
  updatedAt:{
		type:Date,
		default: new Date()
	}
})

module.exports = mongoose.model('User', UserSchema)




