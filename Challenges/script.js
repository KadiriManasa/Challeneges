document
.getElementById("Changing the text")
.addEventListener("click", function(){
    let paragraph = document.getElementById("my Paragraph");
    paragraph.textContent = "paragraph has changed";
});


document
.getElementById("highlightFirstCity")
.addEventListener('click',function(){
    let cititesList = document.getElementById("citiesList");
    cititesList.firstElementChild.classList.add("highlight");
});


document
.getElementById("changeOrder")
.addEventListener("click", function(){
    let coffeeType = document.getElementById("coffeeType")
    coffeeType.textContent = "Espresso";
    coffeeType.style.padding = "5px";
    coffeeType.style.background = "Blue";
});





document
.getElementById("AddNewItem")
.addEventListener("click", function(){
    let newItem = document.createElement("li");
    newItem.textContent = "Eggs";
    document.getElementById("ShoppingList").appendChild(newItem);
});



//Example 6
document
.getElementById("ClickMe")
.addEventListener("click", function(){
    alert("Hey u are logined")
});



//example--7
document
.getElementById("selectionList")
.addEventListener("click", function(event){
    if(event.target && event.target.matches(".selectItem")){
        alert("you selected: " + event.target.textContent);
    }
    
});