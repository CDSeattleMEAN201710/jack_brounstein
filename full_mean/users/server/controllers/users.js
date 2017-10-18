const mongoose = require("mongoose")
const User = mongoose.model("User")

// const users = [{name: "Olivier", createdAt: new Date()}, {name: "Kendra", createdAt: new Date()}]

module.exports = {
	get_all: (req, res) => {
		User.find({})
			.then(users => res.json(users))
			.catch(err => {
				console.log("User.find error", err)
				res.status(500).json(err)
			})
	},

	login: (req, res) => {
		User.findOne({name: req.body.name})
			.then(user => {
				if(user){
					req.session.user = user
					res.json(true)
				} else {
					let new_user = new User(req.body)

					new_user.save()
						.then(() => {
							req.session.user = new_user
							res.json(true)
						})
						.catch(err => {
							console.log("User save error", err)
							res.status(500).json(err)
						})
				}
			})

		
	},

	am_i_logged_in: (req, res) => {
		if(req.session.user){
			res.json(req.session.user)
		} else {
			res.status(401).json(false)
		}
	},

	logout: (req, res) => {
		req.session.destroy()
		res.redirect("/")
	}
}