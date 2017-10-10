const mongoose = require("mongoose")
const Message = mongoose.model("Message")

module.exports = {
	index: (req, res) => {
		console.log("Loaded index page")
		Message.find()
			.then(messages => res.render("index", {messages: messages}))	
	},
	new_message: (req, res) => {
		let new_message = new Message(req.body)

		new_message.save()
			.then(() => res.redirect("/"))
			.catch(err => res.json(err))
	},
	new_comment: (req, res) => {
		Message.findOne({_id: req.body.message_id})
			.then(message => {
				message.comments.push({name: req.body.name, comment: req.body.comment})
				message.save()
					.then(() => res.redirect("/"))
					.catch(err => {
						console.log("New comment save error", err)
						res.json(err)
					})
			})
			.catch(err => {
				console.log("Message.findOne error", err)
				res.json(err)
			})
	}
}