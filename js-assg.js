let arr=[1,2,3,4,5,6,70,8,9,10]
let maxArr=(numArr)=>{
    return(Math.max(...numArr))
}

console.log("Assignment 1:",maxArr(arr))


//assg7
let arr7=[10,9,8,7,0,5,4,3,2,1]
function sortnum(arr){
    
   arr.sort((a,b)=>  +a - +b )
    return arr
}

let newa=sortnum(arr7)
console.log("Assignment 7: ",newa)

//assg8

let names=["bharat","aakash","nihir","rishabh","ashlesh"]
console.log("Assignemnt 8",names.sort())

//assg9

let email="abc@gmail.com"
console.log("Assignment 9")
if(email.includes("@")){
    console.log("Contains @")
}
else{
    console.log("Please write @")
}

//assg10

let mobile="087654321"
let x=""
mobile.length==10 ? x="Valid" : x="Invalid"
console.log("Assignment 10",x)

//assg11
function randNum(){
    return Math.floor(Math.random()*100)
}
console.log(randNum())

