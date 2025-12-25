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