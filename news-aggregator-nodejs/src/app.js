const createError = require("http-errors")
const express = require("express")
const path = require("path")
const logger = require("morgan")
const bodyParser = require("body-parser")
const expressSession = require("express-session")
const hbsMiddleware = require("express-handlebars")
const fs = require("fs")
const flash = require("flash")
const handlebarHelpers = require("./handlebars/helpers")
// const debugFunc = require("debug")

// const appName = "news-aggregator"
// const debug = debugFunc(`${appName}:server`)

const app = express()

// view engine setup
app.set("views", path.join(__dirname, "../views"))
app.engine(
  "hbs",
  hbsMiddleware({
    defaultLayout: "default",
    helpers: handlebarHelpers,
    extname: ".hbs"
  })
)
app.set("view engine", "hbs")

app.use(logger("dev"))
app.use(express.json())
app.use(
  expressSession({
    secret: "Launch Academy",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
)
app.use(flash())

// flush session
app.use((req, res, next) => {
  if (req.session && req.session.flash && req.session.flash.length > 0) {
    req.session.flash = []
  }
  next()
})

app.use(express.static(path.join(__dirname, "../public")))
app.use(bodyParser.urlencoded({ extended: true }))

const articlesPath = path.join(__dirname, "../public/articles.json")

app.get("/", async (req, res) => {
  res.send("Hello from the backend")
})

app.get("/articles/new", async (req, res) => {
  const article = {
    title: "",
    url: "",
    description: ""
  }
  res.render("articles/new", { article })
})

app.get("/articles", async (req, res) => {
  const articles = JSON.parse(fs.readFileSync(articlesPath).toString())
  res.render("articles/index", { articles })
})

app.post("/articles", async (req, res) => {
  const article = req.body
  if (article && article.title) {
    const articles = JSON.parse(fs.readFileSync(articlesPath).toString())
    articles.push(article)
    fs.writeFileSync(articlesPath, JSON.stringify(articles))
    res.redirect("/articles")
  }
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

module.exports = app
