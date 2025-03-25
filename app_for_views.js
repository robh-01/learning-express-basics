//app.js
// this file is named views.js because i already have a app.js file
// in real projects i would use app.js as the filename

import express from "express";
import path from "path";

const app = express();

//setting up views directory and engine
app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(import.meta.dirname, "public");
app.use(express.static(assetsPath));

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.listen(3000, () => {
  console.log("server is running....");
});
