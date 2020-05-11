let maxNo=(num1,num2,num3)=>{
    console.log(Math.max(num1,num2,num3))
    let max=num1;
    if(num2 > num1){
        max=num2;
    }
    if(num3 > max){
        max=num3
    }
    console.log(max)
}
maxNo(3,2,1)