const express = require("express")
const path = require("path")

const app = express()

const PORT = 8000

app.set("views", path.join(__dirname, "./client/views"))
app.set("view engine", "ejs")

app.get("/", (request, response) => {
	let name = "Jack"

	let cool_numbers = [13, 3, 22/7, 42, 227]

	response.render("index", {name: name, nums: cool_numbers} )
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})