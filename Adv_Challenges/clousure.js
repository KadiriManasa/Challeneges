function outer(){
    let counter = 4;
    return function(){
        counter++;
        return counter
    }
}
let value_inc = outer()
console.log(value_inc())