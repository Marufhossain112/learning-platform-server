const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send("hello world");
});
// // GET method route
// app.get("/", (req, res) => {
//   res.send("GET request to the homepage");
// });
app.listen(port, () => {
  console.log("Dragon News Server running on port", port);
});
