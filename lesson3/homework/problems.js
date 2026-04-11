// Problem 1
// Ask the user to enter a number.
// Print "Even" if the number is divisible by 2, otherwise print "Odd".
const prompt = require ("prompt-sync")();
let number = Number(prompt("Pick any number."));

if (number % 2 === 0) {
    console.log("Even")
 } else { 
    console.log("Odd");
 }

// Problem 2
// Ask the user for the day of the week (all lowercase).
// Print "Weekend" if the day is ,
// else print "Weekday".
let week = prompt("Pick any day in the week in lower case.");
if (week === "saturday" ){ 
   console.log("weekend")
}else if (week === "sunday"){ 
   console.log("weekend")
} else {
   console.log("Weekday")
}// Problem 3
// Generate a random number between 1 and 10 (inclusive).
// Ask the user to guess the number.
// Print "Correct!" if the guess matches the random number, else print "Try again!".
let guess = prompt("Guess my number.")
if (guess <=10){
   console.log("Correct!")    
}else{  
   console.log("Try again!")
}

// Problem 4
// Ask the user for a positive integer.
// If the number is divisible by 2 and greater than 10, print "Big even number".
// Otherwise print "Number does not meet criteria".
let int = Number(prompt("Can you tell me a positive integer"));
if (int % 2 === 0) {
   if (int > 10) {
      console.log("Big even number");
   } else {
      console.log("Number does not meeet criteria");
   }
} else { 
   console.log("Number does not meet criteria");
}

// Problem 5
// Ask the user for two numbers.
// Print which number is larger.
// If the numbers are equal, print "Numbers are equal".
let numbers = Number(prompt("Tell me 1 number"))
let numb = Number (prompt ("Tell me the second number"))
if (numbers>numb){
   console.log ("The first number is bigger")
}else if (numb > numbers) {
   console.log("second number is bigger") 
}else if(numbers === numb){
   console.log("Numbers are equal")
}  