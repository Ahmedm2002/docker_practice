const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Hello World", status: `App running on port ${port}` });
});

app.listen(port, () => {
  console.log("Server running on port 5000");
});
