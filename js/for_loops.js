"use script";
var i = 0;
function showMultiplicationTable(number) {
    return (number * i);
}
// var table = 1;
// var count = 10;
//
// for (var i = 0; i < count; i++) {
//     i++;
//     console.log(table, "x", i, "=", table * i);
//     --i;
// }

var multiplier = 7;
for (var i = 3; i <= 8; i += 2) {
    var result = multiplier * i;
    console.log(multiplier + i + '=' + result);
}