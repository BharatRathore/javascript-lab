class Account{

    constructor( name,balance){
        this.name=name
        this.balance=balance
    }
    deposit(amt){
        this.balance+=amt
    }
    
}

class CurrentAccount extends Account{
    constructor(name,balance){
        super(name,balance)

    }
    withdraw(amt){
        this.balance-=amt
    }
    show(){
        console.log(
            "Name: "+this.name+"\nBalance: "+this.balance+"\n-----------------"
        )
    }
}

let obj1 = new CurrentAccount("Bharat",1000)
let obj2 = new CurrentAccount("Akash",1000)
obj1.deposit(2000)
obj2.deposit(3000)

obj1.withdraw(3)
obj2.withdraw(5)

obj1.show()
obj2.show()