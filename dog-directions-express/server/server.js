const express = require("express")
const path = require("path")
const logger = require("morgan")
const bodyParser = require("body-parser")
const hbsMiddleware = require("express-handlebars")
const fs = require("fs")

const app = express()

app.use(logger("dev"))
app.use(express.json())

app.use(express.static(path.join(__dirname, "../public")))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Hello from the backend")
})

app.get("/api/v1/favoriteThings.json", (req, res) => {
  const jsonString = fs.readFileSync(path.join(__dirname, "../favoriteThings.json")).toString()
  res.json(JSON.parse(jsonString))
})

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening...")
})

module.exports = app
