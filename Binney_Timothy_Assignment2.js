//alert("JavaScript works!");
// Timothy Binney
//SDI Project 2
// 1402 Term Number


// Initial variables

var myName = "You";
var myDragon = "Synethra";
var celebrationTime = "Hell Yea We got the loots!";
var myPrompt = prompt("Before your group faces " + myDragon + " Choose bow or sword? Enter Here");
var myConfirm = confirm("Does your group need buffs before you enter into " + myDragon + "\'s Lair?");
var health = 150;
var myGroup = 4;
console.log(myName + " arrive at the lair far earlier then your group!")




// Prompt
myPrompt;


// Procedure
if (myPrompt === "bow") {
    console.log(myName + " and your group prepare a ranged strategy to fight " + myDragon + " !");
}   else  {
        console.log(myName + " and your group prepare a full on brute force strategy to fight " + myDragon + " !");
};


// Confirm

myConfirm;


// Boolean Function
var booleanFunction = function(h){
    if (h === true) {
        console.log("We need buffs!");
    } else
    console.log("We are ready for battle!");
    return h;
    };
    
returnBoolean = booleanFunction(myConfirm);

console.log("You launch your layed out strategy against the beast!");
// Number Function

var battle = function (hitpoints) {
    for (var h = hitpoints; h > 0; h = h - 15) {
        
       console.log("The dragon has " + h + " left!");
        console.log("You hit the dragon for 15 points of damage!");
        };
        
return h;
    
};

dragonHealth = battle(health);

console.log(myDragon + " Falls to her face! Because she has " + dragonHealth + " health left!")


// String Function


var goSeperateWays = function() {
    splitUp = prompt("Would you Like to go home now or wait a bit?")
    
    if (splitUp === "go home") {
    console.log("The adventurers take their loot and " + splitUp + " to their homelands.");
    }
    else {
    console.log("The adventurers " + splitUp + " to chat and then go to their homelands.");
        
    }
    
    return(splitUp); 
};

var partyDisband = goSeperateWays();













