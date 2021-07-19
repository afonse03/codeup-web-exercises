/*
I'm having a hard time completing the first exercise because I don't know how to add commas in between the planets and I don't know how to make the string into an array.
 */


(function(){
    "use strict";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    var planetsArray = planetsString.split(',');
    console.log(planetsArray);


//     var namesString = "Joe,Bob,Sally";
//
//     console.log(namesString);
// // Joe,Bob,Sally
//
//     var namesArray = namesString.split(',');
//
//     console.log(namesArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     *
     *
     * BONUS:
     * Create another string that would display your planets in an unordered list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

})();