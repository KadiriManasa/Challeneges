function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    console.log(`Hey !......This is ${this.name}`);
}
let Manasa = new Person("Manasa");
Manasa.greet();