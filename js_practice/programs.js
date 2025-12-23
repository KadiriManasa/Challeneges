 //Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".
 function stringToNumber(input){
    const num = Number(input);
    if (isNaN(num)){
        return "Not A Number";
    }
    return num;
}
console.log(stringToNumber("123"));
console.log(stringToNumber("abc"));

//Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.

function flipBoolean(input){
    const num = Boolean(input);
    return !num;
}
console.log(flipBoolean(true));
console.log(flipBoolean(0));


//Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
function whatAmI(input){
    if (typeof input == `number`){
        return "I'm a number!";
    }else if (typeof input == `string`)
        return "I'm a string!";
        
}
console.log(whatAmI(21));
//console.log(whatAmI('21'));
 
    






