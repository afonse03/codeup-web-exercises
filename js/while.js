"use strict";

/* While Loops Curriculum Exercise
while (condition) {
    body
}

Example:
var i = 0;

while (i < 10) {
    console.log('while loop iteration #' + i);
    i++;
}

Example: In the second example, the condition i < 10 is never true, so the code in the while loop never gets executed. Well, what if we wanted the code in the while loop to get executed at least one time regardless of whether the condition is met? That brings us to the do-while loop.
var i = 10;

while (i < 10) {
    console.log('while loop iteration #' + i);
    i++;
}
 */


// #2:
var i = 1;

while (i < 65536) {
    i = i * 2
    console.log(i);
}


/*
Do While Loop Exercise
A Do While Loop is different from a While Loop in that the condition is evaluated at the end of the loop instead of at the beginning.
Example:
     do {
        //body
   } while(condition);

Example:
var i = 10;

do {
    console.log('while loop iteration #' + i);
    i++;
} while (i < 10);
*/

// #3: Ice cream seller problem
// Javier went through this in class on 7/15/21 GO OVER IT ASAP

var allCones = Math.floor(Math.random() * 50) + 50;
var sold = Math.floor(Math.random() * 5) + 1;

console.log("Starting number " + allCones);
do {
    allCones = (allCones - sold);
}

while (iceCreamCones > 0) {
    console.log("I'll have an ice cream cone!");
    iceCreamCones = allCones - 1;
    console.log("Now there's " + iceCreamCones + " cones left!");
}

console.log("Yay! I sold them all and I can go home! :)");


/*
we have a certain amount of cones
customer wants to buy an amount
"Okay, how many do we have?"
If we have that many cones or more sell the cones.

iceCreamCone <= attemptedPurchase
 */
