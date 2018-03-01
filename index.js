// require all our dependencies
const express = require('express')
const hbs = require('hbs')
const Joke = require('./models/Joke')
const jokesController = require('./controllers/joke')
const parser = require('body-parser')

// create and set up our express app
const app = express()

// configure express to use hbs
app.set('view engine', 'hbs')
app.use(parser.urlencoded({ extended: true }))

// define our routes:
app.get('/', (req, res) => {
  Joke.find({}).then(jokes => {
    res.render('index', { jokes })
  })
  //   res.render('index')
})
// tell application to use jokesController
app.use('/jokes', jokesController)

// start our server
app.listen(3000, () => console.log('This is working on port 3000'))
