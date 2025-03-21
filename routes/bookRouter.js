import { Router } from "express";

const bookRouter = Router();

bookRouter.get("/", (req, res) => {
  res.send("All books.");
});

bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID: ${bookId}`);
});

bookRouter.get("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send(`Reserve BookID: ${bookId}`);
});

bookRouter.post("/:bookId/reserve", (req, res) => {
  const data = req.body; // data post sent in the POST request
  console.log(`Data: ${data}`); //so some actions with data, here i just printed it.
  res.status(200).send("Data received"); //responding with success message
});

export { bookRouter };
