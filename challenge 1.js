const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter student marks (between 0 and 100): ', (marks) => {
  if (marks >= 0 && marks <= 100) {
    if (marks >= 60 && marks <= 79) {
      console.log("Grade: B");
    } else if (marks >= 80) {
      console.log("Grade: A");
    } else if (marks >= 50 && marks <= 59) {
      console.log("Grade: C");
    } else if (marks >= 40 && marks <= 49) {
      console.log("Grade: D");
    } else {
      console.log("Grade: E");
    }
  } else {
    console.log("Invalid input. Please enter marks between 0 and 100.");
  }

  rl.close();
});