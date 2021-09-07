/*
Main node.js file for this project.
responsible for serving html/js/css files and responding to https calls for live games.

author: William Jackson
Date started: 4 Sept 2021
Last modified: 6 Sept 2021
*/

//configures .env file for easy use.
require('dotenv').config();

//loads express and path modules, set up basic express app
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT;

//code for serving the homepage file and serving public html/css/js files;
app.use(express.static("public"));
app.get("/", (request, response, next) => {
  response.sendFile(path.join(process.cwd(), "/public/index.html"));
});

//starts the app.
app.listen(PORT, () => {console.log("listening on port " + PORT)});
