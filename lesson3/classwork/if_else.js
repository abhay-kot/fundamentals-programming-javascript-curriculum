const prompt = require ("prompt-sync")();

let age = Number(prompt("how old are you?"));
if (age >= 18) {
    console.log("You are eligable to vote")
} else {
    console.log("You are not elegable to vote");
}

let day = prompt("What day of the week is it?")
if (day === "friday") {
    console.log("Its almost the weekend! ")
} else if (day === "sunday" || day === "saturday") {
    console.log("It is already weekend!")
}
else {
    console.log("It is not almost the weekend!")
}