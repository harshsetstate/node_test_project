const express = require("express");
let port = process.env.PORT || 9000;
const app = express();

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

app.get("/", (req, res) => res.send("test server"));

module.exports = app;
