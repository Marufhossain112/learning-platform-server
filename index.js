const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

const courses = require("./data/courses.json");
const coursesDetails = require("./data/coursesDetails.json");
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/courses", (req, res) => {
  res.send(courses);
});
app.get("/courses-details", (req, res) => {
  res.send(coursesDetails);
});
app.get("/courses-details/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourses = coursesDetails.find((n) => n.id === id);
  res.send(selectedCourses);
});
app.get("/checkout/:id", (req, res) => {
  const id = req.params.id;
  const checkoutCourses = coursesDetails.find((n) => n.id === id);
  res.send(checkoutCourses);
});
app.listen(port, () => {
  console.log("Dragon News Server running on port", port);
});
