// Problem 1
// Create a list of 3 operating systems.
// Print the last one using length.
// Then reverse the list and print it.
let g=["Android","Windows","Ios"]
console.log("My last part of my list is",g[g.length-1])
//let f =["Ios","Windows","Android"]
let f=[]
for(let i=g.length-1;i>-1;i--){
    f.push(g[i])
}
console.log("My list is reversed!",f)

// Problem 2
// Create a list of 4 school subjects.elemetry
// Print the second subject.
// Then sort them alphabetically and print the result.
let h=["science","Math","reading","socal stuides"]
console.log("This is the middle of my list.reading")
let j=["Math","reading","science","socal stuides"]
console.log("This is my list alphabeticaly.",j)
// Problem 3
 //Create a list of 5 error codes.
 //Print how many there are.
 //Then find the index of "403" and print it.
let fa=[200,500,403,401,302,403]
console.log("This is how many things I have in my list",fa.length)
for (i=0;i<fa.length;i++){
    if(fa[i]==403){
        console.log("The index is "+i)
    }
}





// Problem 4
// Create a list of 2 programming languages.
// Print a random one.
// Then append another language and print the list.
let k=["java script","c++"]
let l =("java script.")
k.push("python",k[2])
console.log("This is a random language",l)
console.log("This is my list",k)
// Problem 5
// Create a list of 6passwords.
// Print the one in the middle using length.
// Then remove the first password in the list and print it.
let y = [1,2,3,4,5,6]
console.log("This is the middle of my pasword",y[y.length/2])
let z = [2,3,4,5,6]
console.log("This is the middle of my list after my first pasword is gone is",z[z.length/2])