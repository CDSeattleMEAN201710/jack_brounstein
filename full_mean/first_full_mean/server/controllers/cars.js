const mongoose = require("mongoose")
const Car = mongoose.model("Car")

module.exports = {
	index: (req, res) => {
		Car.find({})
			.then(cars => res.json(cars))
			.catch(err => {
				console.log("car find error", err)
				res.status(500).json(err)
			})
	},

	create: (req, res) => {
		let new_car = new Car(req.body)
		new_car.save()
			.then(() => res.json(true))
			.catch(err => {
				console.log("car create error", err)
				res.status(500).json(err)
			})


	}
}