function Animal (){}
   Animal.prototype.speak=function(){
    return `Animal Speaing`;
   }

function Dog (){}
    Dog.prototype=Object.create(Animal.prototype);
    Dog.prototype.constructor=Dog;
    Dog.prototype.bark = function () {
        return 'Woof!';
    }


let dog = new Dog();
console.log(dog.speak());
console.log(dog.bark());





//
function Person(name,age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        return`Hello My name is ${this.name}`;
    }
    
}
let Name = new Person("Manasa",421);
console.log(Name.greet());





//
class Vehicle{
    constructor (make,model){
        this.make = make;
        this.model = model;
    }
    getDetails(){
        return `make : ${this.make}, model : ${this.model}`;
    }
    move (){
        return `The vehicle is moving`;
    }
    static isVehicle(obj) {
        return  obj instanceof Vehicle;
    }
}
class Car extends Vehicle {
  startEngine() {
    return 'Engine started';
  }
  move(){
    return `The car is driving`;
  }
}
let myVehicle = new Vehicle("Generic","ModelIx");
let myCar = new Car("BMW","Corolla");
console.log(myVehicle.getDetails());
console.log(myCar.move());
console.log(myCar.startEngine());
