// this file is named app_for_route.js because i already have a app.js file
// in real projects i would use app.js as the filename

import express from "express";
import { authorRouter } from "./routes/authorRouter.js";
import { bookRouter } from "./routes/bookRouter.js";
//did one default import/export for just fun
import indexRouter from "./routes/indexRouter.js";

const app = express();

// Middleware to parse plain text data ( have to study more about this but for now it works)
app.use(express.text());

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("server is running at port 3000....");
});
