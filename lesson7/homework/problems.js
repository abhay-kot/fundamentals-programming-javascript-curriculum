// Problem 1
// Find and print the sum of all the numbers greater than 25 in the list.
let l = [1,5,300,50,25]
let sum = 0
for (let i = 0;i<l.length;i++){
    if (l[i]>25){
        sum = sum + l[i]
    }
}

    


// Problem 2
// Find and print the sum of all the numbers less than -10 in the list.

let k = [-1,-5,-3,-5,-25,-30]
let s = 0
for (let i = 0;i<k.length;i++){
    if (k[i]<-10){
        s = s + k[i]
    }
}
console.log("the sum of the list less than -10 is",s)

// Problem 3
// Find and print the biggest number less than 100 in the list.
let nm =[1,12,67,6,99,777,555,5]
let b = nm[0]; 
for(let i = 0;i <nm.length;i++){
    let it = nm[i]
    if (it<100 ){
        b = it
    }
}
console.log ("the biggest item is less than a hundred is", b)


// Problem 4
// Find and print the biggest number in the list.
let n =[1,12,67,677000,56785465433,66]
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

let lm = [1,5,30,50,25,30]
let sm = 0
for (let i = 0;i<lm.length;i++){
    sm = sm + lm[i]
    }
console.log("Total sum is",sm) 