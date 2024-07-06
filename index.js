import inquirer from "inquirer";
console.log("********** Welcome To A Adventure Quiz Game **********");
console.log("You will a get 1 point for each correct answer. At the end of the quiz, your total score will be displayed.Maximum score is 8 points.");
let points = 0;
// make a question 1
let question1 = await inquirer.prompt([
    {
        name: "numberone",
        type: "list",
        message: "What are the three main 'simple type' in typescript?",
        choices: ["Boolean-Number-String", "Array-Object-Boolean", "Object-String-Number "]
    }
]);
if (question1.numberone == "Boolean-Number-String") {
    console.log("You are correct answer.");
    points++;
}
else {
    console.log("You are incorrect answer.");
}
;
//make a question 2
let question2 = await inquirer.prompt([
    {
        name: "numbertwo",
        type: "list",
        message: "Typescript can always correctly infer a variables type?",
        choices: ["True", "False"]
    }
]);
if (question2.numbertwo == "True") {
    console.log("You are correct answer.");
    points++;
}
else {
    console.log("You are incorrect answer.");
}
;
//make a question 3
let question3 = await inquirer.prompt([
    {
        name: "numberthree",
        type: "list",
        message: "What is the inherited type for the variable example in `const example = ['dylan']`?",
        choices: [" string[]", "Array[]", "Unknown[]"]
    }
]);
if (question3.numberthree == "Array[]") {
    console.log("You are correct answer.");
    points++;
}
else {
    console.log("You are incorrect answer.");
}
;
//make a question 4
let question4 = await inquirer.prompt([
    {
        name: "numberfour",
        type: "list",
        message: "Typescript will always correctly infer type of an array?",
        choices: ["True", "False"]
    }
]);
if (question4.numberfour == "False") {
    console.log("You are correct answer.");
    points++;
}
else {
    console.log("You are incorrect answer.");
}
;
//make a question 5
let question5 = await inquirer.prompt([
    {
        name: "numberfive",
        type: "list",
        message: "A touple and an array are the same thing when discussing type?",
        choices: ["True", "False"]
    }
]);
if (question5.numberfive == "True") {
    console.log("You are correct answer.");
    points++;
}
else {
    console.log("You are incorrect answer.");
}
;
if (points >= 4) {
    console.log("CONGRATULATION! YOU WIN");
    console.log(`Your points is ${points}`);
}
else {
    console.log('You Loss! Try Again');
    console.log(`Your points is ${points}`);
}
