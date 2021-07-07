"use strict";
//Make sure you don't put a space between log and the ( or else it won't work
// console.log("Hello from external JavaScript!");
//
// alert( "Welcome to my Website!");
//
// var userFavoriteColor = prompt("What is your favorite color?");
// console.log(userFavoriteColor);
// if (userFavoriteColor === "blue"){
//     alert( "Great, blue is my favorite color too!");
//     }


// * #3 on the JavaScript with HTML lesson:
// * when the exercise asks you to use a number, instead use
// a prompt to ask the user for that number.
// * use an alert to show the results of each problem.

// ========== Movie Rental
// var movieMermaidInDays = 3;
// var movieBearInDays = 5;
// var movieHerculesInDays = 1;
//
// var movieLittleMermaidDaysInquiry = prompt ("How many days would you like to rent the Little Mermaid?");
// if (movieLittleMermaidDaysInquiry === "3"){
//     alert(" You owe" + " " + movieLittleMermaidDaysInquiry * 3 + " " + "dollars for your rental.");
// }
//
// var movieBBearDaysInquiry = prompt ("How many days would you like to rent Brother Bear?");
// if (movieBBearDaysInquiry === "5"){
//     alert(" You owe" + " " + movieBBearDaysInquiry * 3 + " " + "dollars for your rental.");
//
// }
//
// var movieHerculesDaysInquiry = prompt ("How many days would you like to rent Hercules?");
// if (movieHerculesDaysInquiry === "1"){
//     alert(" You owe" + " " + movieHerculesDaysInquiry * 3 + " " + "dollars for your rental.");
//
// }
// var movieCostInDollarsPerDay = 3;
//
// function totalPay (movieMermaidInDays, movieBearInDays, movieHerculesInDays){
//  return (movieMermaidInDays * movieCostInDollarsPerDay) + (movieBearInDays * movieCostInDollarsPerDay) +
//      (movieHerculesInDays * movieCostInDollarsPerDay);
//
//  totalPay(3, 5, 1)
//
// }
// ========== Contract Work
// var googlePayDollars = parseFloat(prompt("What is your Google hourly rate?"));
// var amazonPayDollars = parseFloat(prompt("What is your Amazon hourly rate?"));
// var facebookPayDollars = parseFloat(prompt("What is your Facebook hourly rate?"));
//
// var googleHours = parseFloat(prompt("How many hours are you working this week at Google?"));
// var amazonHours = parseFloat(prompt("How many hours are you working this week at Amazon?"));
// var facebookHours = parseFloat(prompt("How many hours are you working this week at Facebook?"));
//
// var totalPay = googleHours * googlePayDollars;
// totalPay += amazonHours * amazonPayDollars;
// totalPay += facebookHours * facebookPayDollars;
//
// alert("Total payment for contract work is $" + totalPay.toFixed(2));
// ========== School Enrollment
var classIsNotFull = confirm("Confirm that the class is not full");
var classScheduleCheck = confirm("Confirm that the schedule checks out");

var studentEnrolled = classIsNotFull && classScheduleCheck;
alert("Student enrollment status: " + studentEnrolled);
// ========== Product Offer




































