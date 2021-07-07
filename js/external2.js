"use strict";

// alert("Hi, I am a JavaScript alert!");
//
// confirm
//
// var userDecision = confirm("Are you sure you don't want to buy stuff?");
// console.log(userDecision);
//
// if (userDecision === true) {
//     alert("Wise choice!");
// } else {
//     alert("Oh no, your loss!");
// }
//
// prompt

var currentSpeedInMph = 65;
var plannedSpeedInMph = prompt("How fast do you plan to go in mph?");
var distanceLeftInMiles = prompt("How many miles away are you from your destination?");
var timeToDestinationAtCurrentSpeed = (distanceLeftInMiles/currentSpeedInMph) * 60;
var timeToDestinationAtPlannedSpeedInMph =
    (distanceLeftInMiles/plannedSpeedInMph) * 60;
var timeGain = timeToDestinationAtCurrentSpeed -
    timeToDestinationAtPlannedSpeedInMph;
var minutesGained = Math.floor(timeGain);
var seconds = Math.round((timeGain - minutesGained) * 60);
console.log("If you drive at " + plannedSpeedInMph + " mph, " +
    "you will arrive " + minutesGained + " minutes and " + seconds + " minutes earlier. Is it worth it?");
