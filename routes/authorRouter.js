import { Router } from "express";

const authorRouter = Router();

// this will match localhost:3000/authors (the "authors" part in this path is
// specified by app.js(app_for_router.js in my case))
authorRouter.get("/", (req, res) => {
  res.send("All authors");
});

//this will match localhost:3000/authors/anyID123x (same here: authors part is specified by app_for_router.js)
authorRouter.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID : ${authorId}`);
});

export { authorRouter };
