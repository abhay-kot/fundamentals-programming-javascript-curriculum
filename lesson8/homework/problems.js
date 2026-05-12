// Problem 1
// Write a function that returns the number 42 and print the result.

function number( ){
    let bla = 42
    return bla
}
console.log(number())

// Problem 2
// Write a function that returns "penguin" and print the result.

function Penguin(){
    let ar = "Penguin" 
    return ar
}
console.log(Penguin())



// Problem 3
// Create a variable for a fruit, then print it.
// Modify it inside a function and print it again.
let fruit = "blueberry"
function _fruit_() {
    console.log(fruit)
}
_fruit_()

function change(){
    fruit = "Apple"
}

change()
_fruit_()

// Problem 4
// Write a function that takes two parameters: first_name and last_name.
// The function should return a string that combines the first and last names separated by a space.

function names(first_name, last_name ){
    let st = first_name +" "+ last_name
    return st;
    }
console.log(names("Abhay Nandan","Kotcharlakota"))


// Problem 5
// Write a function called calculate_perimeter that takes two parameters: length and width.
// The function should return the perimeter of a rectangle (2 * (length + width)).

function calculate_perimeter(Length, Width ){
    let area = 2 * (Length + Width)
    return area
}
console.log(calculate_perimeter(67676767676767676767676,414141414141414141414141))
