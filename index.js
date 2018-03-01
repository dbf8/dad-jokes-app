// require all our dependencies
const express = require("express");

// create and set up our express app
const app = express();

// define a route
app.get("/", (req, res) => {
  res.send("Hello Universe!");
});

// start our server
app.listen(3000, () => console.log("This is working on port 3000"));
