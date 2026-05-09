// Problem 1
// Find and print the sum of all the numbers greater than 25 in the list.
let num =[1,12,10,6,56785465433,67]
let big = num[0]; 
for(let i = 0;i <num.length;i++){
    let it = num[i]
    if (it>big){
        big = it
    }
}
console.log ("the item that is bigger than 25 is", big)


// Problem 2
// Find and print the sum of all the numbers less than -10 in the list.
let nu =[1,12,67,677000,-56,-44-77]
let bg = nu[0]; 
for(let i = -10;i >nu.length;){
    let it = nu[i]
    if (it>bg){
        bg = it
    }
}
console.log ("the biggest item is", bg)


// Problem 3
// Find and print the biggest number less than 100 in the list.
let nm =[1,12,67,6,99,777]
let b = nm[0]; 
for(let i = 0;i <nm.length;i++){
    let it = nm[i]
    if (it>b){
        b = it
    }
}
console.log ("the biggest item is less than a hundred is", b)


// Problem 4
// Find and print the biggest number in the list.
let n =[1,12,67,677000,56785465433]
let bi = n[0]; 
for(let i = 0;i <n.length;i++){
    let it = n[i]
    if (it>bi){
        bi = it
    }
}
console.log ("the biggest item is", bi)


// Problem 5
// Find and print the total sum of all the numbers in the list.
let i =[60]
let v = [40]
console.log("The total sum is",v+i)