#! /usr/bin/env node
//The app will show the students multiple choice questions and prompt the user to reply..
//In the end it will show the students the result of the quiz..

import inquirer from "inquirer"

console.log("Welcome To My Adventure Quiz Game:");
console.log("You are required to gain maximum 4 points for the window.");

let points = 0

//Question 1
let question_1 = await inquirer.prompt([
    {
        name:"One",
        message: "TypeScript is a superset off?",
        type: "list",
        choices: ["Python","C++","JavaScript","jQuery"]
    }
])

if (question_1.One === "JavaScript") {
    console.log("Your Answer Is Correct")
    points++
} else {
    console.log("Incorrect Answer")
}

//Question 2
let question_2 = await inquirer.prompt([
    {
        name: "Two",
        message: "Which keyword is used to define a function in TypeScript",
        type: "list",
        choices: ["var","let","function","declare function"]
    }
])
if (question_2.Two == "function") {
    console.log("Your Answer Is Correct")
    points++
} else {
    console.log("Incorrect Answer");
};

//Question 3
let question_3 = await inquirer.prompt([
    {
        name: "Three",
        message: "What is the concept of rest parameters in TypeScript functions",
        type: "list",
        choices: ["A way to define an arbitrary number of string arguments",
            "A method for accessing function metadata",
            "Islamabad",
            "Not supported in TypeScript functions"] 
    }
])
if (question_3.Three == "A way to define an arbitrary number of string arguments") {
    console.log("Your Answer Is Correct")
    points++
} else {
    console.log("Incorrect Answer");
};

//Question 4
let question_4 = await inquirer.prompt([
    {
        name: "Four",
        message: "Who Is The Current Governor Of Sindh",
        type: "list",
        choices: ["Kamran Tessori","Faisal Karim Kundi","Saleem Haider Khan","Sheikh Jaffar Khan"]
    }
])
if (question_4.Four == "Kamran Tessori") {
    console.log("Your Answer Is Correct")
    points++
} else {
    console.log("Incorrect Answer");
};

//Question 5 
let question_5 = await inquirer.prompt([
    {
        name: "Five",
        message: `Consider const person = { name: "Alice", age: 30 }. How can you access the age property using dot notation?`,
        type: "list",
        choices: ["person.age",
                   `person["age"]`,
                 `Both person.age and person["age"] work`,
                "None of the above"]
    }
])
if (question_5.Five === "person.age") {
    console.log("Your Answer Is Correct")
    points++
} else {
    console.log("Incorrect Answer");
};

let question_6 = await inquirer.prompt([
    {
        name: "Six",
        message: "Who Is The Founder Of Microsoft",
        type: "list",
        choices: ["Mark Zuckerberg","Bill Gates","Larry Page","Reid Hoffman"]
    }
])
if (question_6.Six == "Bill Gates") {
    console.log("Your Answer Is Correct")
    points++
} else {
    console.log("Incorrect Answer");
};

//Output Conditions
if (points >= 5) {
    console.log("Congatulations!");
    console.log(`Your Points: ${points}`)
} else {
    console.log("You Loss! Try Again ");
    console.log(`Your Points: ${points}`);
};