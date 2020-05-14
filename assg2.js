class Account{

    constructor( name,balance){
        this.name=name
        this.balance=balance
    }
    deposit(amt){
        this.balance+=amt
    }
    disp(){
        console.log(
            "Name: "+this.name, "Balance: "+this.balance
        )
    }
}

let obj1 = new Account("Bharat",1000)
let obj2 = new Account("Akash",1000)
obj1.deposit(2000)
obj2.deposit(3000)

obj1.disp()
obj2.disp()