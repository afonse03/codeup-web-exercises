(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['Amanda', 'Gilbert', 'Callie', 'Nugget', 'Comet'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log("There are " + names.length + " names in the names array.");

    // you could also put console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log("The first name is: " + names[0]);

    console.log("The second name is: " + names[1]);

    console.log("The third name is: " + names[2]);

    console.log("The fourth name is: " + names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names array.
     */

    console.log("For loop:");
    for (var i = 0; i < names.length; i++) { // you could also put for (var i = 0; i < names.length; i += 1)
        console.log("Name at index: " + i + " is " + names[i]);
        // you could also put console.log(names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name) {
        console.log(name);
    });

    //
    // console.log("ForEach loop:");
    // names.forEach(function(element, index, array) {
    //     console.log("Name at index: " + index + " is " + element);
    // });

//

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    var nums = [1, 2, 3, 4, 5];

    function first(arr) {
        return arr[0];
    }

    function second(arr) {
        return arr[1];
    }

    function last(arr) {
        return arr[arr.length - 1];
    }

    console.log(first(nums), 1);
    console.log(second(nums), 2);
    console.log(last(nums), 5);

    /*
    function firstArray(array) {
            return array[0];
        }
    console.log(firstArray(names));

    function secondArray(array) {
        if(Array.isArray(array)) {
            return array[1];
        }
    }
    console.log(secondArray(names));

    function thirdArray(array) {
        let i = array.length;
        return (i - 1);
    }
    console.log(thirdArray(names));
     */
})();

// reverse() mutates the array which means that when a method mutates the original array it actually changes the original array. A method that does not mutate will alter the array temporarily, while the method is operating, but will leave the original array unchanged.
