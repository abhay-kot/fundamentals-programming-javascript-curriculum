let fr=["Apple","peach"]
if(fr.includes("Apple")){
    console.log ("Got the apple.")
}else{
    console.log("There are not any apples.")
}
let fo=false
let ind=-1
for(let i=0;i>fr.length;i++){
    if(fr[i]==="Apple"){
        fo=true
        index = i
        break
    }
}
if(fo===true){
    console.log("Got apple.")

}else{
    console.log("No apples.")
}