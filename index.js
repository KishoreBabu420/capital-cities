const readlineSync = require('readline-sync');

const chalk = require('chalk');

let score = 0;
const highscores = [
  {name: 'Kishore', score: 11},
  {name: 'Rajesh', score: 9},
  {name: 'Kumar', score: 8},
]

const questions = [
  {
    question:'What is the Capital city of India? ',
    answer:'Delhi'
  },
  {
    question:'What is the Capital city of Telangana? ',answer:'Hyderabad'
  },
  {
    question:'What is the Capital city of Maharastra? ',answer:'Mumbai'
  },
  {
    question:'What is the Capital city of Bihar? ',answer:'Patna'
  },
  {
    question:'What is the Capital city of Tamilnadu? ',answer:'Chennai'
  },
    {
    question:'What is the Capital city of Gujarath? ',answer:'Gandhi Nagar'
  },
]

const gameEngine = function(question, answer) {
  console.log('-----------');
  console.log('-----------');
  console.log('-----------');
  let userAnswer = readlineSync.question(chalk.yellow(question))
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log('You are correct!!')
    score += 2;

    console.log(`You score is ${score}`)
  } else {
    console.log('You are wrong!!')
    score -= 1;
    console.log(`You score is ${score}`)
  }
}

//Greet User - Personilize greeting
//Score
//create a function which will ask the user question and it will check whether it is correct or not
//Array of questions

//We will for loop on this array
//Welcome Message
console.log(chalk.bold('Welcome to the world of Quiz!!'))
console.log('-----------');
console.log('-----------');
//Getting user Name
let userName = readlineSync.question(chalk.yellow('What is your Name ? '));
console.log('-----------');
console.log('-----------');
console.log('-----------');
//Personilized Message
console.log(chalk.red(`Hello ${userName}`))
console.log('-----------');
console.log('-----------');
console.log('-----------');
//Getting Uer AGe
let userAge = readlineSync.question(chalk.yellow('What is your age? '));
console.log('-----------');
console.log('-----------');
console.log('-----------');
//Game Engine
if (userAge >= 18) {
  console.log('You are eligible for the Quiz');
  for(let i = 0; i< questions.length; i++){
  gameEngine(questions[i].question, questions[i].answer);
  }
} else {
  console.log('Come back, when you are 18')
}

console.log(`You final score is ${score}`);
console.log('Check the Highscores Below!!!');
console.table(highscores);