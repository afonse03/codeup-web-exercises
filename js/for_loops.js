"use strict";
// var i = 0;
// function showMultiplicationTable(number) {
//     return (number * i);
// }

// function showMultiplicationTable(number) {
//     for (var i = 1; i <= 10; i++) //shorthand loop
//         console.log(i + " x " + number + " = " + (i * number));
// }
// console.log(showMultiplicationTable(7));

// function showMultiplicationTable(number) {
//     for (var i = 1; i <= 10; i++)
// }

// var table = 1;
// var count = 10;
//
// for (var i = 0; i < count; i++) {
//     i++;
//     console.log(table, "x", i, "=", table * i);
//     --i;
// }

// var multiplier = 7;
// for (var i = 3; i <= 8; i += 2) {
//     var result = multiplier * i;
//     console.log(multiplier + i + '=' + result);
// }

// Walkthrough of this Exercise

/* #2: Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

For example, showMultiplicationTable(7) should output


7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70

 */
function showMultiplicationTable(number) {
    for (numberWeMultiplyBy = 1; numberWeMultiplyBy <= 10; numberWeMultiplyBy++) {
        console.log(number + " x " + numberWeMultiplyBy + " = " + number * numberWeMultiplyBy);
    }
}

var number = 7;
// console.log(number + " * 1 = " + number * 1);
// console.log(number + " * 2 = " + number * 2);
// console.log(number + " * 3 = " + number * 3);

for (numberWeMultiplyBy = 1; numberWeMultiplyBy <= 10; numberWeMultiplyBy++) {
    console.log(number + " * 1 = " + number * 1);
}



/* #3: Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

123 is odd
80 is even
24 is even
199 is odd
...
 */



/* #4: Create a for loop that uses console.log to create the output shown below.

1
22
333
4444
55555
666666
7777777
88888888
999999999
 */




/* #5: Create a for loop that uses console.log to create the output shown below.

100
95
90
85
80
75
70
65
60
55
50
45
40
35
30
25
20
15
10
5
 */
