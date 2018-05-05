const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

//this is the server for backend express, right? the views display on 3000
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose (there's no need for seedDB, so promise goes here)
mongoose.Promise = global.Promise;
// Connect to the Mongo DB (useMongoClient no longer needed)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");


// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
