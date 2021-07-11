// alert("hello world");

// var flavor = prompt("Welcome to Codeup Ice Cream! What is your favorite flavor?");
//
// if (flavor === "chocolate" && "Chocolate") {
//     alert("One chocolate coming right up!");
// } else if (flavor === "vanilla"){
//     alert("One vanilla coming right up!");
// }else if {flavor === "strawberry") {
//     alert("We do not have that flavor. Sorry! :(");
// }
// }else {
//     alert("We do not have that flavor. Sorry! :(");
// }

//switch
//hey browser, look at the value of the flavor variable
//and switch your response depending on the value
// fall through is BAD
// you always want a default

// switch(flavor) {
//     case("chocolate"):
//         alert("One chocolate coming right up!");
//         break;
//     case("vanilla"):
//         alert("One vanilla coming right up!");
//         break;
//     default:
//         alert("We do not have that flavor. Sorry!");
// }


//refactor
var flavor = prompt("Welcome to Codeup Ice Cream! What is your favorite flavor?");
function getIceCreamOrder(flavor)
