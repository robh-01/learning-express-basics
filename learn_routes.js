// learning about routes in express

import express from "express";
const app = express();

//use all of these examples with browsers to better understand what is going on

// app.get("/", (req, res) => {
//   res.send("<h1>You are in homepage </h1>");
// });

//matching routes using regex symbols like *, (), ?

//match all kind of paths for GET requests
// app.get("*", (req, res) => {
//   res.send("Matches all kind of paths");
// });

//matches /messages and /message for GET requests (? makes the a character optional here s is being optional)
// app.get("/messages?", (req, res) => {
//   res.send("Matches /message or /messages");
// });

// "()" groups character together
// app.get("/(messages)?", (req, res) => {
//   res.send("matches / and /messages");
// });

//order matters!!
//here the GET request for the second "/messages" route will never be reached as all paths for GET requests is caught by the first route
// app.get("*", (req, res) => {
//   res.send("matches all GET requests on all paths");
// });

// app.get("/messages", (req, res) => {
//   res.send("this route is never reached because of the first route");
// });

//route parameters
//route parameters can only be named with words containing alphanumeric and "_" only. like user_name or username1
// app.get("/:user_name/messages", (req, res) => {
//   console.log(req.params);
//   //logs the object with username: "value that is in the url"
//   console.log(req.params.user_name);
//   //logs the exact username in the url
//   res.end();
// });

//query parameters
/**
 * GET /odin/messages?sort=date&direction=ascending will log
 * Params: { username: "odin" }
 * Query: { sort: "date", direction: "ascending" }
 *
 * if same query parameter is doubled in url an array is the value for that jey in the req.query object
 * GET /odin/messages?sort=date&sort=likes&direction=ascending will log
 * Params: { username: "odin" }
 * Query: { sort: ["date", "likes"], direction: "ascending" }
 */
app.get("/:username/messages", (req, res) => {
  console.log(req.params.username);
  //logs whatever is in the url in place of the username part

  console.log(req.query);
  //logs the object with key value pairs of queries( part after the "?" in the url)
  res.end();
});

app.listen(3000, () => {
  console.log("server running");
});
