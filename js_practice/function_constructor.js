function Student(name,rollno){
    this.name = name
    this.rollno = rollno
}
let newStudent = new Student("Manasa",421);
//console.log(newStudent);





function College(name){
    this.name = name
    this.describe = function(){
        return `This is my ${this.name} college`;
    };


}
let myCollege = new College("Annamacharya");
//console.log(myCollege.describe());




function Drink(name){
    if (!new.target){
        throw new Error("Drink must be called a new keyword");
    }
    this.name = name;
}
let myDrink = new Drink("Tea");

