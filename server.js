const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 7000;

app.use(bodyParser.urlencoded({ extended: true }));

//connect to db
mongoose.connect("mongodb://127.0.0.1:27017/Exam", { useNewUrlParser: true });

//create schema
const quizSchema = new mongoose.Schema({
  name: String,
  sid: String,
});

// define model
const Quiz = mongoose.model("Quiz", quizSchema);
module.exports = Quiz;

const newQuiz = new Quiz({
  name: "Monaliza Dasig",
  sid: "300365023",
});

Quiz.create(newQuiz)
  .then(function () {
    console.log("Successfully added a new quiz");
    mongoose.connection.close();
  })
  .catch(function (err) {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
