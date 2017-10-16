const mongoose = require("mongoose")

const CarSchema = mongoose.Schema({
	make: {type: String, required: true, minlength: 4},
	model: String,
	year: Number,
}, {timestamps: true})

mongoose.model("Car", CarSchema)