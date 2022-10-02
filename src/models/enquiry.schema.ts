import mongoose from 'mongoose'

const newEnquirySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	mobile: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	intrests: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
},
	{
		timestamps: true,
	})


const NewEnquiryModel = mongoose.model("enquiries", newEnquirySchema);

export default NewEnquiryModel;
