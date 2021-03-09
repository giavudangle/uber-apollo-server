import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema


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
		type:_Schema.Types.ObjectId,
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

export default model('User', UserSchema)




