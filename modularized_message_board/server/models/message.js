const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4},
	comment: {type: String, required: true},
}, {timestamps: true})

const MessageSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4},
	message: {type: String, required: true}, 
	comments: [CommentSchema]
}, {timestamps: true})

mongoose.model("Message", MessageSchema)