const { data } = require("./p4-data");


function getQuestions() {
    // Returns an array of strings where each array element is a question.
    const questions = data.map(obj => obj.question);
    return questions;

}

function getAnswers() {
    // Returns an array of strings where each array element is an answer.
    // [ 'A1', 'A2', 'A3' ]
    const answers = data.map(obj => obj.answer);
    return answers;
}

function getQuestionsAnswers() {
        // Return copy of books
        return JSON.parse(JSON.stringify(data));
// Returns a copy of the original data array of objects.
// Extra credit: see Cloning an Array of Objects in JavaScriptLinks to an external site. to avoid simply making a mutable copy.
// [
//   { question: 'Q1', answer: 'A1' },
//   { question: 'Q2', answer: 'A2' },
//   { question: 'Q3', answer: 'A3' }
// ]


}

function getQuestion(number = "") {
    const result = {
      question: "",
      number: number,
      error: "",
    };
  
    if (Number.isInteger(number) === false) {
      result.error = "Question number must be an integer";
      result.number = "";
    } else if (number < 1) {
      result.error = "Question number must be >= 1";
      result.number = "";
    } else if (number > data.length) {
      result.error = `Question number must be less than the number of questions (${data.length})`;
      result.number = "";
    } else {
      result.question = data[number - 1].question;
    }
  
    return result;
  }
// Returns an object with the following properties:
// question property (string): The question from the data.
// number property (integer): The question number,  not array index value.
// error message property (string): Any error that occurred while getting the question.
// {
//   question: 'Q1',
//   number: 1
//   error: '',
// }


function getAnswer(number = "") {

// Returns an object with the following properties:
// answer property (string): The answer from the data.
// number property (integer): The question number,  not array index value.
// error message property (string): Any error that occurred while getting the question.
// {
//   answer: 'A1',
//   number: 1
//   error: '',
// }

    const result = {
      answer: "",
      number: number,
      error: "",
    };
  
    if (Number.isInteger(number) === false) {
      result.error = "Answer number must be an integer";
      result.number = "";
    } else if (number < 1) {
      result.error = "Answer number must be >= 1";
      result.number = "";
    } else if (number > data.length) {
      result.error = `Answer number must be less than the number of questions (${data.length})`;
      result.number = "";
    } else {
      result.answer = data[number - 1].answer;
    }
  
    return result;
  }


function getQuestionAnswer(number = "") {
    const result = {
      question: "",
      answer: "",
      number: number,
      error: "",
    };
  
    if (!Number.isInteger(number)) {
      result.error = "Question number must be an integer";
      result.number = "";
    } else if (number < 1) {
      result.error = "Question number must be >= 1";
      result.number = "";
    } else if (number > data.length) {
      result.error = `Question number must be less than the number of questions (${data.length})`;
      result.number = "";
    } else {
      result.question = data[number - 1].question;
      result.answer = data[number - 1].answer;
    }
  
    return result;
  }

// Returns an object with the following properties:
// question property (string): The question from the data.
// answer property (string): The answer from the data.
// number property (integer): The question number,  not array index value.
// error message property (string): Any error that occurred while getting the question.
// {
//   question: 'Q1',
//   answer: 'A1',
//   number: 1
//   error: '',
// }



/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = true;
  const testGetAs = true;
  const testGetQsAs = true;
  const testGetQ = true;
  const testGetA = true;
  const testGetQA = true;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }

  module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
  };