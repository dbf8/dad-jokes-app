// require all our dependencies
const express = require('express')
const hbs = require('hbs')

// create and set up our express app
const app = express()

// configure express to use hbs
app.set('view engine', 'hbs')
// make the views folder
// create layout.hbs
// create index.hbs

// define our routes:
app.get('/', (req, res) => {
  // render the index view
  res.render('index')
})

// start our server
app.listen(3000, () => console.log('This is working on port 3000'))
