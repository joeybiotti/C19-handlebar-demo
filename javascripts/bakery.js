"use strict";

let inventory = [];
let bakery = {};

// let fillInventory = (data =>{
// 	data.ccakes.forEach(function(element){
// 		inventory.push(element);
// 	});
// });

bakery.getInventory =()=>{
	return inventory;
};

bakery.loadInventory = () => {
    return new Promise(function(resolve, reject) {
        let inventoryLoader = new XMLHttpRequest();
        //invetoryLoader.open("GET", "invetory.json")
        inventoryLoader.open("GET", "https://awesomedata-5de8b.firebaseio.com/ccakes.json");
        inventoryLoader.send();

        inventoryLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            console.log("data", data);
            resolve(data);
        });
    });
};

module.exports = bakery;
