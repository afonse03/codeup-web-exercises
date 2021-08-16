/* # Third JavaScript Assessment Practice Problems

The third JavaScript assessment will require the writing of functions that manipulate various data types, including arrays and objects. The use of iteration (loops) in many cases will be required to achieve this. The second halve of the JavaScript 101 exercises is excellent preparation for the assessment problems. This is a resource for additional practice problems.

    ## Problems

DONE 1. Create a function, `printAll`, that takes an array and logs every element on a new line in the console.

    ```javascript
	printAll(['hello', 'hi', 'greetings']);
	/*
	  prints...
	  hello
	  hi
	  greetings

	```
	*/
function printAll(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

printAll(['hello', 'hi', 'greetings']);

/* DONE 2.Create a function, `getLowestNumber`, that take in an array of numbers and returns the lowest number.


    ```javascript
	getLowestNumber([23,47,50,5]); // returns 5
	getLowestNumber([5.8,7.3,8.2,4.7, 4.3]); returns 4.3
	getLowestNumber([-7,9,76,0,-4]); // returns -7
	```
*/
function getLowestNumber(array) {
    var lowestNumber = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < lowestNumber) {
            lowestNumber = array[i];
        }
    }
    return lowestNumber;
}

// another way to solve this problem:

// function getLowestNumber(array) {
//     return Math.min.apply(Math, array);
// }
//math.min is a built in JS object; apply is a built in function that applies what you're telling it to pass



/* DONE 3. Create a function, `getOccurrences`, that takes in two arguments, a string and a letter. The function will count the number of occurrences of the specified letter within the string and return that number. The function should recognize case for instances (e.g. 'M' does not equal 'm').

```javascript
	getOccurrences('hello', 'l'); // returns 2
	getOccurrences('mississippi', 's'); // returns 4
	getOccurrences('Bubble', 'B'); // returns 1
	```
*/
function getOccurrences(string, letter) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === letter) {
            count += 1;
        }
    }
    return count;
}

console.log(getOccurrences('hello', 'l'));

/* DONE 4. Create a function, `getLongestString`, that takes in an array of strings and returns the longest string. If the two longest words are equal in length, return the last to appear in the array.

    ```javascript
	getLongestString(['hello', 'hi', 'greetings']); // returns 'greetings'
	getLongestString(['hello', 'world', '!' ]); // returns 'world'
	```
*/
function getLongestString(string) {
    var longest = '';
    for (var i = 0; i < string.length; i++) {
        if (string[i].length >= longest.length) {
            longest = string[i];
        }
        // } else {
        //     if (string[i].length === longest.length) {
        //         return string.lastIndexOf[i];
        //     }
        // }
    }
    return longest;
}

console.log(getLongestString(['hello', 'hi', 'greetings']));
console.log(getLongestString(['racecar', 'greetin', 'cometcs']));


/* DONE 5. Create a function, `getFirstLetter`, that takes an array of strings and returns an array of the first letter of each string.

    ```javascript
	getFirstLetter(['hello', 'hi', 'greetings']); // returns ['h','h','g']
	getFirstLetter(['hello', 'world', '!' ]); // returns ['h','w','!']
	```
*/
function getFirstLetter(array) {
    var string1 = []; /*buckets*/
    for (var i = 0; i < array.length; i++) {
        string1.push(array[i].charAt(0));
    }
    return string1;
}

//another way to solve this problem:

// function getFirstLetter(array) {
//     return array.map(function(string) {
//        return string[0];
//     });
// }
//map method will loop through and return a copy of the array with any functionality you want it to

console.log(getFirstLetter(['hello', 'hi', 'greetings']));

/* DONE 6. Create a function, `arrayEndsWith`, that takes two arguments, an array and a shorter array, and returns a boolean whether or not the larger array ends with the same elements as the passed second array elements. The function should return true if the second array elements are at the end of the first array. Assume that neither array will be empty, contain only string, number, or boolean elements and that the length of the second array will always be shorter than the first.

    ```javascript
	arrayEndsWith(['hi', 'hello', 'world', true, 3, 5], [3, 5]); // returns true
	arrayEndsWith(['hi', 'hello', 'world', true, 3, 5], [3, 9]); // returns false
	arrayEndsWith(['hi', 'hmmm'], ['hmmm']); // returns true
	arrayEndsWith([1, 2, 3], [2, 3]); // returns true
	arrayEndsWith([1, 2, 3], [3, 2]); // returns false
	```
*/
function arrayEndsWith(array1, array2) {
    let stop = array1.length - array2.length;
    let indexOf2 = array2.length - 1;
    for (let i = array1.length - 1; i >= stop; i--) {
        if (array1[i] !== array2[indexOf2]) {
            return false;
        }
        indexOf2--;
    }
    return true;
}

console.log(arrayEndsWith(['hi', 'hmmm'], ['hmmm']));
console.log(arrayEndsWith([1, 2, 3], [2, 3]));
console.log(arrayEndsWith([1, 2, 3], [3, 2]));

// another way to solve this problem:

/* function arrayEndsWith(long, short) {
    let commonLetters = 0;
    for (let i=0; i<short.length; i++) {
        if (long[(long.length-short.length)+i]===short[i]) {
            commonLetters++;
        }
    }
    return commonLetters===short.length;
}
 */



/* DONE 7. Create a function, `numsToObject`, that takes in three number inputs and returns them as property values `num1`, `num2`, and `num3` on an object.

    ```javascript
	numsToObject(4, 5, 6); // returns {num1: 4, num2: 5, num3: 6}
	numsToObject(1, 2, 3); // returns {num1: 1, num2: 2, num3: 3}
	numsToObject(0, 199, 34); // returns {num1: 0, num2: 199, num3: 34}
	```
*/
function numsToObject(num1, num2, num3) {
    return { num1: num1, num2: num2, num3: num3}
}


/* I THINK THIS IS GOOD 8. Create a function, `removeNums`, that takes in an array of data types and returns an array of the same elements except for any number data types. Numeric strings do not count as a number but NaN does.

    ```javascript
	removeNums(['a', true, null, [], {}, 4, '5', NaN]) // returns ['a', true, null, [], {}, '5']
	removeNums(['a', 'b', 'c']) // returns ['a', true, null, [], {}, '5']
	```
*/
function removeNums(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            result.push(array[i]);
        }
    }
return result;
}


/* DONE 9. Create a function, `objectToSum`, that takes in an object, and returns the sum of any number property values (numeric strings will not be added). Expect that no object property values will be NaN. If no number properties are present, return 0.

    ```javascript
	objectToSum({prop1: 'bob', prop2: true, prop3: 5}) // returns 5
	objectToSum({a: '3', b: true, c: 5, d: 3}) // returns 8
	objectToSum({foo: 'one', bar: 'two'}) // returns 0
	```
*/
function objectToSum(object) {
    var objectArray = Object.values(object);
    var newArray = 0;
    objectArray.forEach(function(array) {
        if (typeof array !== 'number') {
            newArray += 0;
        } else {
            newArray += array;
        }
    });
    return newArray;

}



/* DONE 10. Create a function, `objToObj`, that takes in an object with only property values of a string type and returns another object with a single property called 'all' with a value of all input object properties values concatenated together.

***Please note that the order of object properties is uncertain and concatenating the object property values will be unpredictable. This is fine.***

```javascript
	objToObj({foo: 'hello', bar:'world'}) // returns {all: 'helloworld'} or {all: 'worldhello'}
	objToObj({a: 'codeup', b:'rocks'}) // returns {all: 'rockscodeup'} or {all: 'codeuprocks'}
	```
*/
function objToObj(object) {
    var all = Object.values(object);
    var string = '';
    all.forEach(function(element) { /*trying to concat var all taking in obj parameter, and this will split to an array and*/
       string += element;
    });
    return {all: string}; /*{} output is a single prop of an OBJs ???*/
}

console.log(objToObj({foo: 'hello', bar:'world'}));
console.log(objToObj({a: 'codeup', b:'rocks'}));
console.log(objToObj({foo: 'hello', bar:'world'}));

/* DONE 11. Create a function, `getStringDeets`, that takes in a string and returns an object with specific properties containing information about the string, namely:

- `firstChar` -  containing the first character of the string
- `lastChar` - containing the last character of the string
- `length`- containing the length of characters of the string
- `shoutedVersion` - containing an all caps version of the string

    ```javascript
	getStringDeets("apple"); // returns...

	  {
	    firstChar: "a",
	    lastChar: "e",
	    length: 5,
	    shoutedVersion: "APPLE"
	  }

	```
*/
function getStringDeets(string) {
    return {
        firstChar: string.charAt(0),
        lastChar: string.charAt(string.length - 1),
        length: string.length,
        shoutedVersion: string.toUpperCase()
    }
}

console.log(getStringDeets("apple"));


/* MAYBE DONE 12. Create a function, `createUsersObject`, that takes in two arrays: the first array is an array of strings (usernames), the second is an array of numbers (user ages). The function should return an object with property names matching to the first array elements paired with property values matching the second  array elements. Assume both arrays are the same length.

    ```javascript
	var usernames = ['cindy', 'fred', 'cathy'];
	var ages = [34, 22, 45];
	createUsersObject(usernames, ages) // returns {cindy: 34, fred: 22, cathy: 45}
	```
*/
function createUsersObject(userNames, userAges) {
    var object = {}
    userNames.forEach(function(name, index){
       object[name] = userAges[index];
    });
    return object;
}

console.log(createUsersObject(usernames, ages); // returns {cindy: 34, fred: 22, cathy: 45})