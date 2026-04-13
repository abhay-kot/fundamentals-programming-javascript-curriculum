const prompt = require ("prompt-sync")();

let age = Number (prompt("How old are you?"));
let has_ticket = prompt("Do you have a movie ticket? yes/no");

//and both conditions must be true
if (age >=13 && has_ticket ==="yes"){
    console.log("You can enter the theater.")
} else {
    console.log("Sorry you can`t enter.");
}
console.log("movie check is complete")

//or atleast one condition is true
let has_pass = prompt("Do you have a bus pass? yes/no");
let coins = prompt("do you have coins to pay?yes/no");
if (has_pass === "yes"||coins === "yes"){;
    console.log("You can ride the bus.");
}else{
    console.log("You can`t ride the bus.");
}
console.log("Bus check complete");
//false to true true to false
let work = prompt("Did you do your homework.yes/no")

if (!(work ==="yes")){
    console.log("go finish your homework!")
}else{
    console.log("Nice job!You finished.")
}
let game = true ;
let week = false;
let yes = true ;
if (game && (week||yes){
    console.log
