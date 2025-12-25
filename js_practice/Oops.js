class Vehicle{
    constructor (model,year){
        this.model = model;
        this.year = year;
    }
    //using the class without function
    start() {
        return `the ${this.model} car was manufactured in the ${this.year}`

    }
}
//Inheritence concept using without constructor
class Car extends Vehicle{
    drive(){
        return`${this.year}:Inheritence example`;
    }
}
let myCar = new Car("Toyato",2025);
console.log(myCar.start());
console.log(myCar.drive());



///Encapsulation
class bankAccount{
    #balance = 0;//here # represents no one has direct access
    deposit (amount){
        this.#balance += amount;
        return this.#balance;
    }
    getBalance(){
        return `$ ${this.#balance}`
    }
}
let account = new bankAccount();
console.log(account.getBalance());




//Abstraction
class coffeeMachine{
    start(){
        return`starting the Machine`;
    }
    brewCoffee(){
        return `Brew Coffee`;
    }
    pressStartButton(){
        let msgone = this.start();
        let msgTwo = this.brewCoffee();
        return `${msgone} + ${msgTwo}`;
    }
}
let myNewMachine = new coffeeMachine();
console.log(myNewMachine.pressStartButton());




//polymorphism 
class Bird{
    fly(){
        return `Flying.......`;
    }
}
class Penguin extends Bird{
    fly(){
        return `Penguin not fly`
    }
}
let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());




//Static Method

class Calculator{
    static add(a,b){ //this method is used as private data storage which cant acess anyone
        return a + b;
    }
}
console.log(Calculator.add(2,3));//this process is used for whenever static method is used 





//getters and setters
class Employee{
    #salary;
    constructor(name,salary){
        if (salary<0){
            throw new Error("Salary cannot be negative");
        }
        this.name = name;
        this.#salary = salary;
    }
    get salary(){
        return `You are not allowed`;
    }
    set salary(value){
        if (value < 0){
            console.log("Invalid salary");
        }else{
            this._salary = value;
        }
    }
}
let newEmployee = new Employee("Manas",-50000);
console.log(newEmployee._salary);
newEmployee.salary = 60000;