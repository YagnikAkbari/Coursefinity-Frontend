import React, { useState } from "react";
import Button from "../../ui/Button";

const questions = [
  {
    question:
      "1. What is the purpose of the typeof operator return for the null value?",
    options: ['"object"', '"null"', '"undefined"', '"number"'],
    answer: 1, // Index of the correct answer in the options array
  },
  {
    question:
      "2. Which of the following is not a valid JavaScript variable name?",
    options: ["_myVar", "2myVar", "$myVar", "myVar_2"],
    answer: 1,
  },
  {
    question: "3. What will be the output of console.log(2 + '2')?",
    options: ["4", '"22"', "22", "NaN"],
    answer: 1,
  },
  {
    question:
      "4. What is the purpose of the addEventListener method in JavaScript?",
    options: [
      "To create a new event",
      "To add a function to the event queue",
      "To register an event handler to an element",
      "To remove an event listener",
    ],
    answer: 2,
  },
  {
    question: "5. Which keyword is used to declare a constant in JavaScript?",
    options: ["let", "var", "const", "set"],
    answer: 2,
  },
  {
    question: "6. What is the scope of a variable declared using let keyword?",
    options: ["Global scope", "Local scope", "Block scope", "Function scope"],
    answer: 2,
  },
  {
    question: "7. What is the purpose of the Promise object in JavaScript?",
    options: [
      "To represent a value that might be available now, in the future, or never",
      "To handle exceptions in asynchronous code",
      "To declare a variable with a promise value",
      "To create a one-time event",
    ],
    answer: 0,
  },
  {
    question: "8. What is the result of 3 + 2 + '7'?",
    options: ['"57"', '"12"', "12", "57"],
    answer: 0,
  },
  {
    question: "9. How do you check if a variable is an array in JavaScript?",
    options: [
      "isArray(variable)",
      "variable.isArray()",
      'typeof variable === "array"',
      "Array.isArray(variable)",
    ],
    answer: 3,
  },
  {
    question: "10. What is the purpose of the this keyword in JavaScript?",
    options: [
      "It refers to the current function",
      "It refers to the parent function",
      "It refers to the global object",
      "It refers to the current object",
    ],
    answer: 3,
  },
];

const QuizPage = () => {
  return (
    <>
      <div className="flex justify-between px-5 py-6 font-medium text-xl">
        <div>OOP quiz</div>
        <p>10 Questions</p>
      </div>
      <div className="px-5 w-full h-[400px] overflow-y-scroll custom-scrollbar">
        {questions.map((question, id) => {
          return (
            <div key={id}>
              <p>{question.question}</p>
              <form>
                {question.options.map((option, id) => {
                  return (
                    <div key={id}>
                      <label>
                        <input
                          type="radio"
                          value={option}
                          className="text-primary-700 focus:border-2 focus:ring-0 focus:ring-offset-0 mr-2  border-primary-700 border-2"
                        />
                        {option}
                      </label>
                      <br />
                    </div>
                  );
                })}
              </form>
              <br />
            </div>
          );
        })}
        <Button
          type="button"
          typeName="primary"
          width="w-fit"
          className="m-auto"
          onClick={() => {}}
        >
          Submit answers
        </Button>
      </div>
    </>
  );
};

export default QuizPage;
