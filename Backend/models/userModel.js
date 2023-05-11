import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false //do not make a user admin
		},
	}, {
	timestamps: true  //created and updated 
})

const User = mongoose.model('User', userSchema)


export default User
