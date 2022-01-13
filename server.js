// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const db = require('./lib/db');

// PG database client/connection setup
// const { Pool } = require("pg");
// const dbParams = require("./lib/db.js");
// const db = new Pool(dbParams);
// db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
// allows to send back and forth json objects
app.use(express.json());
// allows to send back and forth images, documents, etc.
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const itemsRoutes = require("./routes/items");
const ordersRoutes = require("./routes/orders");
// const viewsRoutes = require("./routes/views");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own

// rendering views - front-end
// app.use("/", viewsRoutes(db));

// apis - sending back and forth data
app.use("/", itemsRoutes(db));
app.use("/orders", ordersRoutes(db));


// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

<<<<<<< html-feature

app.get("/", (req, res) => {
  res.render("mainpage");
});

app.get("/menu", (req, res) => {
  res.render("index");
});


app.get("/checkout", (req, res) => {
  res.render("checkout");
});
=======
// app.get("/", (req, res) => {
//   res.render("mainpage");
// });

// app.get("/menu", (req, res) => {
//   res.render("index");
// });
>>>>>>> master

// app.get("/checkout", (req, res) => {
//   res.render("checkout");
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
