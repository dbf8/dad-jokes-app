# Planning

## What we're building:

This is a dad joke app. It has the following:

* Create a joke and save it to the database
* Edit a joke
* Delete said joke
* Some kind of show page for a joke
* User Authentication (sign up page, sign in page)
* Association: my jokes are my jokes! (which User made what joke)

## User Stories

"As a (Something) I want to (something) so I can (something else)

* As a User, I want to create and save a joke, so I can keep track of my jokes.
* As a User, I want to edit a joke, so I can fix my joke.
* As a User, I want to delete a joke so I can remove it.
* As a User, I want to view my jokes.
  <!-- * As a User, I want to be able to thumbs up or thumbs down jokes -->
* As a viewer, I want to be able to only view jokes and do nothing else.
* As a user, I want to create an account so I can start posting and saving jokes
* As a user, I want to sign in with my account, so I can keep adding jokes
* As a user, I want to create a joke and have it associated with my profile

## MVP

* ability to create/add jokes
* ability to view the jokes
* homepage with feed of jokes

## Bronze

* ability to create account to sign in
* associated jokes to users
* edit your jokes

## Silver

* ability to delete jokes
* user profile showing their jokes
* homepage w/ a feed of jokes

## Gold

* commenting on jokes
* tagging

# super small steps

1.  run npm init -y
2.  npm install --save express (or now just npm install express)
3.  touch index.js
4.  inside index.js at it's most simple
    require all our dependencies

    ````const express = require("express");
    // create and set up our express app
    const app = express();

    // define a route
    app.get("/", (req, res) => {
    res.send("Hello Universe!");
    })

    // start our server
    app.listen(3000, () => console.log("This is working on port 3000" ```
    ````

5.  Render a view
    *npm install hbs --save
    *require the dependency in index.js
    const hbs = require('hbs')
    *configure express to use hbs
    app.set('view engine', 'hbs')
    *touch a views folder
    touch layout.hbs
    touch index.hbs
    \*render the index view in index.js -> app.get function
6.  mkdir DB
    touch db/connection.js
    npm install mongoose --save
    in connection.js
    ````const mongoose = require('mongoose')
    mongoose.connect('mongodb://localhost/dad_jokes')```
    create promise: ```mongoose.Promise = Promise```
    export module so it can be availble globally: module.exports = mongoose
    ````
7.
8.
