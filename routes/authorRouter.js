import { Router } from "express";
import { getAuthorById } from "../controllers/authorController.js";

const authorRouter = Router();

//route level middleware
authorRouter.use((req, res, next) => {
  //do some middleware things
  next();
})

// this will match localhost:3000/authors (the "authors" part in this path is
// specified by app.js(app_for_router.js in my case))
authorRouter.get("/", (req, res) => {
  res.send("All authors");
});

//this will match localhost:3000/authors/anyID123x (same here: authors part is specified by app_for_router.js)
// authorRouter.get("/:authorId", (req, res) => {
//   const { authorId } = req.params;
//   res.send(`Author ID : ${authorId}`);
// });


// example for controllers
authorRouter.get("/:authorId", getAuthorById)
export { authorRouter };
