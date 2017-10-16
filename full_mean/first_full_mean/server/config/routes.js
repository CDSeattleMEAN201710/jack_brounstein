const cars = require("./../controllers/cars")

module.exports = app => {
	app.get("/get_all_cars", cars.index)
	app.post("/create", cars.create)
}