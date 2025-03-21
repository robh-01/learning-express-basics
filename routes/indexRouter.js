import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("Homepage");
});

indexRouter.get("/about", (req, res) => {
  res.send("About page");
});

indexRouter.get("/contact", (req, res) => {
  res.send("Contact page");
});

indexRouter.post("/contact", (req, res) => {
  const message = req.body;
  console.log(`Message: ${message}`);
  res.status(200).send("Message Received");
});

export default indexRouter;
