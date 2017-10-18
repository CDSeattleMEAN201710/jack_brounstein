const path = require("path")

const users = require("./../controllers/users.js")

module.exports = app => {
	app.get("/get_all_users", users.get_all)
	app.post("/login", users.login)
	app.get("/am_i_logged_in", users.am_i_logged_in)
	app.get("/logout", users.logout)

	app.get("*", (req, res) => res.sendFile(path.resolve("./client/dist/index.html")))
}