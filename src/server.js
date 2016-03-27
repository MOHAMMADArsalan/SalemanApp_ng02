/// <reference path="../typings/tsd.d.ts" />
var express = require("express");
var morgan = require("morgan");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var firebase = require("firebase");
var app = express();
var connect = mongoose.connect("mongodb://localhost/saleman2");
var api = require("./user/userrouter");
var router = require("./user/userData");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static(path.resolve(__dirname, "../Client")));
var port = process.env.PORT || 9000;
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../Client/index.html"));
});
app.use("/api", api);
app.use("/router", router);
app.listen(port);
console.log("App is Runnig on port 9000");
