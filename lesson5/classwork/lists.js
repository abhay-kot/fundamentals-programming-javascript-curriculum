let colors = ["red","blue","yellow"];
console.log(colors);

console.log("First color",colors[0])
console.log("second color",colors[1])
console.log("third color",colors[2])
console.log("fourth color",colors[3])
console.log("fifth color",colors[4])

colors.push("purple")
colors.push("blue")
console.log("fourth color",colors[3])
console.log("fifth color",colors[4])
console.log("After append",colors)
colors.splice(2,0,"pink")
console.log("After insert at index 2:"+po)
let po = colors.pop
console.log("Popped color"+po)
console.log("After pop:", colors)

let popp = colors.splice (1,1[0])
console.log("Popped color at index 1:"+ colors)
console.log("After pop at index 1:"+colors)

let in_blue=colors.indexOf("blue")
console.log("Index of blue",in_blue)
let bc= colors.filter((coler)=> color =="blue").length
console.log("Count of 'blue'",bc)
colors.sort();
console.log("")