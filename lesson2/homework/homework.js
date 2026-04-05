// Homework Problem 1
// Ask the user for two numbers.
// Print their quotient and remainder on separate lines.
const prompt = require("prompt-sync")();
let first = prompt("Can you tell me the first number?");
let second = prompt ("Can you tell me the second number?")
let quo = parseInt (first/second)
let rem = first-(quo * second);
console.log("The remander is "+rem+ ".The quotiet is "+quo) 


// Homework Problem 2
// Ask the user for their favorite animal and favorite color.
// Print a sentence combining them like: "A blue tiger would be awesome!"
let ani = prompt ("Can you tell me what your favorite animal is? ")
let color = prompt ("What is your favorite color? ")
console.log("A  "  +  color    + " "    +        ani +  " would be very cool.  " )

// Homework Problem 3
// Use a for loop to print all the even numbers from 0 to 10 (including 10).



// Homework Problem 4
// Ask the user how many push-ups they can do.
// Multiply it by 7 and print how many they could do in a week.



// Homework Problem 5
// Use a for loop to print the square of each number from 1 to 6.
// (Example: 1*1=1, 2*2=4, etc.)
