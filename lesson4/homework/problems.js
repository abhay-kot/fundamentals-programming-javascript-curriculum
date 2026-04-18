// Problem 1
// Ask user for two test scores.
// If BOTH scores are at least 50, print "You passed both!"
// Otherwise, print "You failed at least one."
const prompt = require ("prompt-sync")();
let fir = Number (prompt("What did you get for your first test?"));
let sec = Number (prompt("What did you get for your second test?"));
if (fir >=50 && sec >= 50 ) {
    console.log("You passed both!!!")
} else {
    console.log("You failed at least one!!!") 
}// Problem 2
// Ask user if they brought lunch and water (yes/no).
// If they brought lunch OR water, print "You're somewhat ready."
// If they brought both, print "You're fully ready!"
// If they brought neither, print "You're not ready."
let lu  = Number (prompt("Did you buy lunch?And please do it lower case.yes/no"));
let wa = Number (prompt("Did you buy water?"));
if (lu==="yes" && wa=== "yes"){
    console.log("You`re Fully ready!!!")
}else{
    console.log("You're not ready.")
}




// Problem 3
// Ask user to enter a number.
// If the number is NOT between 1 and 10 (inclusive), print "Out of range."
// Otherwise, print "In range."
let guess = prompt("Guess my number.")
if (guess <=10){
   console.log("In range.")    
}else{  
   console.log("Out of range.")
}


// Problem 4
// Generate a random number between 1 and 10.
// Ask the user to guess.
// If the guess is right AND the number is even, print "Even match!"
// Else if guess is right OR number is 5, print "Nice try!"
// Otherwise, print "Nope."
let gu = prompt("tell me a number between 1 - 10.")
let gue = prompt("Guess the number between.")
if (gu===gue){
   console.log("Even match!")    
}else{  
   console.log("nice Try!")
}


// Problem 5
// Ask the user for two numbers.
// If one is divisible by 5 AND the other is NOT divisible by 2, print "Interesting pair!"
// Otherwise, print "Plain pair."
let fi = prompt("Tell me the first number.")
let se = prompt("Tell me the second number.")
let y =parseInt(se)
let x = parseInt(fi)
if (x%5===0   && y%2==0){
    console.log("Interesting pair!!!")
}else{
    console.log("plain pair.")
}
