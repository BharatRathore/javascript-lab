function sum(){
   let sumz=0
    const args=[...arguments]
    args.forEach(a=>{
        sumz+=a
    })
    return sumz
}

console.log(sum(1,2,3,4,5,6))