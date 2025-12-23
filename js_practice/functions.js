//calling a function 
function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
    
}
let teaOrder= makeTea("greenTea");
console.log(teaOrder);

//callinga function in a nested function
function orderTea(teaType){
    function confirmOrder(){
        return `Order Confirmed for chai`;
    }
    return confirmOrder();
}
let orderConfirmed = orderTea("Chai");
console.log(orderConfirmed);


