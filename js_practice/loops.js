//sum of numbers
let sum = 0;
let i = 0;
while(i <= 5){
    sum += 1;
    i++;

}
console.log(sum); 


//printing all given values in a list to new list upto 'chai' value
let teas = ["green tea","blacktea","chai","oolong tea"];
let selectedTeas = [];
for (i = 0; i<teas.length; i ++){
    if (teas[i] == 'chai'){
        break;
    }
    selectedTeas.push(teas[i])
}
console.log(selectedTeas); 

//printing all given values in a list to new list expect'Paris' value.

let cities = ["London", "New York","Paris","Berlin"];
let visitedCities = [];
for (i = 0; i<cities.length; i++){
    if(cities[i] == 'Paris'){
        continue;
    }
    visitedCities.push(cities[i]);
}
 console.log(visitedCities); 


