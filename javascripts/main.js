"use strict";

console.log("hello cupcakes.");

let Handlebars = require('hbsfy/runtime'),
	cakeInventory = require('./bakery.js'),
	cakeTemplate = require('../templates/cake-grid.hbs'),
	eventStuff = require("./events.js"),
	welcomeTemplate = require("../templates/welcome.hbs"),
	welcomeData = require("../templates/welcome-data.js");

Handlebars.registerHelper("increment", (value)=> parseInt(value) + 1);

$("#welcome").append(welcomeTemplate(welcomeData));

function populatePage(stuff){
	let obj = {ccakes : stuff};
	let newDiv = document.createElement("div");
	console.log("stuff", stuff);
	newDiv.innerHTML = cakeTemplate(obj);
	$("#cake-cards").append(newDiv);
	eventStuff();
}

cakeInventory.loadInventory()
.then(
	(inventoryFromLoadIventoryResolve) =>{
		console.log("cake promise", inventoryFromLoadIventoryResolve);
		populatePage(inventoryFromLoadIventoryResolve);
	},
	(reason) => {
		console.log("something went really wrong, sorry to break your heart.");
	});
