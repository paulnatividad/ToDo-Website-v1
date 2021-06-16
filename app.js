//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

//Using EJS a templating engine
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
//To Use CSS
app.use(express.static("public"));
//Used array to add a new list to the list and not overwrite
const items = [];
const workItems = [];

app.get("/", function (req, res) {
  //date Module
  const day = date.ejsDay();
  res.render("list", { listTitle: day, myItem: items });
});

app.post("/", function (req, res) {
  console.log(req.body);
  //saving the new list on item variable
  const item = req.body.newItem;

  if (req.body.list === "Work") {
    //Pushing our new item to the "items" array
    workItems.push(item);
    //Redirect to work directory (/work) for render function
    res.redirect("/work");
  } else {
    items.push(item);
    //Redirect to root directory (home page) for render function
    res.redirect("/");
  }
});

// ---------------------Work -----------------------
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", myItem: workItems });
});

app.listen(3000, function () {
  console.log("Server is running");
});
