import * as db from "../db.js";

//this is a controller
async function getAuthorById(req, res) {
  const { authorId } = req.params;

  const author = await db.getAuthorById(+authorId);

  if (!author) {
    res.status(404).send("Author not found");
    return;
  }

  res.send(`Author Name: ${author.name}`);
}

export { getAuthorById };
