/// <reference path="../typings/tsd.d.ts" />

import express     =  require("express");
import morgan      =  require("morgan");
import path        =  require("path");
import bodyParser  =  require("body-parser");
import mongoose    =  require("mongoose");
import cors        =  require("cors");
let    firebase    =  require("firebase");
let    app         =  express();
let    connect     =  mongoose.connect("mongodb://localhost/saleman2");
import api         =  require("./user/userrouter");
import router         =  require("./user/userData");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use(morgan("dev"));
app.use(express.static(path.resolve(__dirname, "../Client")));
var port: number = process.env.PORT || 9000
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client/index.html"));
})

app.use("/api", api);
app.use("/router", router);

app.listen(port);
console.log("App is Runnig on port 9000")