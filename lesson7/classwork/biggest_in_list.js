let num =[1,12,67,677000,56785465433]
let big = num[0]; 
for(let i = 0;i <num.length;i++){
    let it = num[i]
    if (it>big){
        big = it
    }


}
console.log ("the biggest item is", big)