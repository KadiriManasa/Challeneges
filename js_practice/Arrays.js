//Fetching a value in a list using index values
let cities = ["London","Tokyo","Paris","New York"];
let favoriteCity = cities[2]
console.log(favoriteCity) 


//pushing and poping values in /from list 
let citiesVisited = ["Mumbai","Sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);


citiesVisited.pop("Berlin");
console.log(citiesVisited); 

//merging two lists using concat and forming a new list 
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Toky0", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);
console.log(worldCities); 

let cityBucketList = ["Kyoto","London","cape","VanCover"];
let isLondonLInList = cityBucketList.includes("London");

console.log(isLondonLInList)