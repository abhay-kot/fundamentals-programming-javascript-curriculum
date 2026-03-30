const prompt = require("prompt-sync")();

let name = prompt("What is your name?");
console.log("Your name is " + name);
// WHEN YOU ADD A NUMBER TO A STRING IT CONCATES THE STRING.
console.log(name + 1);

let NUMBER = Number (name);// CASTING
console.log (NUMBER + 1)