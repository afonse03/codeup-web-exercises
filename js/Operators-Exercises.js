//Operators exercises after lesson

// For each of the following code blocks, read the expression and predict what the result of evaluating it would be, then execute the expression in the Chrome console.

'1' + 2
// 12

typeof '1' + 2
// "string2"

6 % 4
// 2

'3 + 4 is ' + 3 + 4
/* "3 + 4 is 34" which is not correct
 how could you make this produce the correct output?
 '3 + 4 is ' + (3 + 4) which equals:
 "3 + 4 is 7"
 */


0 < 0
// false

'false' == false // == means loose equality, === means strict equality
// false

true == 'true'
// false

5 >= -5
// true

!false || false
// true

true || "42"
// true

!true && !false
// false

6 % 5
// 1

5 < 4 && 1 === 1
// false

typeof 'codeup' === 'string'
// true

'codeup' === 'codeup' && 'codeup' === 'Codeup'
// false

4 >= 0 && 1 !== '1'
// true

6 % 3 === 0
// true

5 % 2 !== 0
// true