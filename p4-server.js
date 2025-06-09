const express = require("express");
const app = express();
const port = 3000;

const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
} = require("./p4-module");

app.use(express.json()); // Needed later for POST/PUT/DELETE

// /cit/question
app.get("/cit/question", (req, res) => {
  const questions = getQuestions();
  res.json({
    error: "",
    statusCode: 200,
    questions: questions,
  });
});

app.get("/cit/answer", (req, res) => {
    const answers = getAnswers();
    res.json({
      error: "",
      statusCode: 200,
      answers: answers,
    });
  });
  
app.get("/cit/questionanswer", (req, res) => {
  const questionsAnswers = getQuestionsAnswers();
  res.json({
    error: "",
    statusCode: 200,
    questions_answers: questionsAnswers,
  });
});

app.get("/cit/question/:number", (req, res) => {
    const number = parseInt(req.params.number);
    const result = getQuestion(number);
  
    res.json({
      error: result.error,
      statusCode: result.error ? 400 : 200,
      question: result.question,
      number: result.number,
    });
  });

app.get("/cit/answer/:number", (req, res) => {
  const number = parseInt(req.params.number);
  const result = getAnswer(number);

  res.json({
    error: result.error,
    statusCode: result.error ? 400 : 200,
    answer: result.answer,
    number: result.number,
  });
});

app.get("/cit/questionanswer/:number", (req, res) => {
    const number = parseInt(req.params.number);
    const result = getQuestionAnswer(number);
  
    res.json({
      error: result.error,
      statusCode: result.error ? 400 : 200,
      question: result.question,
      answer: result.answer,
      number: result.number,
    });
  });
  

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

app.use((req, res) => {
    res.status(404).json({
      error: "Route not found",
      statusCode: 404,
    });
  });
  