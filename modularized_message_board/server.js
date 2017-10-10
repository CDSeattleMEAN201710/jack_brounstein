const express = require("express")
const path = require("path")

const app = express()
const bodyParser = require("body-parser")

const PORT = 8000

app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, "./client")))

app.set("views", path.join(__dirname, "./client/views"))
app.set("view engine", "ejs")

require("./server/config/mongoose")

require("./server/config/routes.js")(app)

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})