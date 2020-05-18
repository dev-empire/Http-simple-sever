const express = require("express");

const app = express();

const users = require("./user");

app.get("/", (req, res) => {
  res.send("<h1>Hello from Alamin</h1>");
});
app.get("/post", (req, res) => {
  res.json(users);
});

app.get("/:id", (req, res) => {
  const found = users.some(user => user.id === parseInt(req.params.id));

  if (found) {
    const sPost = users.filter(user => user.id === parseInt(req.params.id));
    res.json(sPost);
    res.status(200);
  } else {
    res.status(400).send("<h3>There is no user with such id</h3>");
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server stated on ${PORT}`));
